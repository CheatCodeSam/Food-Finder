import React, { useState, useEffect, useCallback, useRef, useMemo } from "react"
import PropTypes from "prop-types"
import { Box } from "@mui/material"
import { Undo, Clear, Favorite, Info } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import TinderCard from "react-tinder-card"
import styled from "@emotion/styled"
import fetchFood from "./fetchFood"
import FoodCard from "./FoodCard"

const FoodCardContainer = styled.div`
    position: relative;    
    display: flex;
    justify-content: center;
    margin-top: 15vh;
    padding: 0;
    background-color: #f5f5f5;
`
const SwipeCard = styled(TinderCard)`
    position: absolute;
`

const NavigationContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0px 40px 0px;
    background-color: cyan;
    width: 100%;
    bottom: 0;
`
const NavigationButton = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 20px 0px rgba(154, 159, 174, 0.2);
    &:active {
        transform: translate(5px, 5px);
        box-shadow: box-shadow: -10px -10px 0px 0px rgba(154, 159, 174, 0.2);
    }
`

function FoodCard2(props) {
  const [food, setFood] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lastDirection, setLastDirection] = useState()

  const currentIndexRef = useRef(currentIndex)

  const getFood = useCallback(async () => {
    const _food = await fetchFood()
    setFood(_food)
    updateCurrentIndex(_food.length - 1)
  }, [])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geopos) => {
      const lat = geopos.coords.latitude
      const long = geopos.coords.longitude
      getFood(lat, long).catch(console.error)
    })
  }, [])

  const childRefs = useMemo(
    () =>
      Array(getFood.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < currentIndex - 1
  const canSwipe = currentIndex >= 0

  const swiped = (dish, direction, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
    if (direction === "right") {
      props.swipeRight(dish)
    }
  }

  const outOfFrame = (idx) => {
    updateCurrentIndex(idx)
    if (idx < 1) {
      navigator.geolocation.getCurrentPosition((geopos) => {
        const lat = geopos.coords.latitude
        const long = geopos.coords.longitude
        getFood(lat, long).catch(console.error)
      })
    }
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < food.length) {
      await childRefs[currentIndex].current.swipe(dir)
    }
  }

  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <Box>
      <FoodCardContainer>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {food.map((dish, index) => (
            <SwipeCard
              ref={childRefs[index]}
              key={dish.img}
              onSwipe={(dir) => swiped(dish, dir, index)}
              onCardLeftScreen={() => outOfFrame(index)}
            >
              <FoodCard
                img={dish.img}
                title={dish.title}
                distance={dish.distance}
                price={dish.price}
              />
            </SwipeCard>
          ))}
        </Box>

      </FoodCardContainer>

      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {food.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, index)}
            onCardLeftScreen={() => outOfFrame(index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>

      <NavigationContainer>
        <NavigationButton>
          <IconButton onClick={() => goBack()}><Undo /></IconButton>
        </NavigationButton>
        <NavigationButton>
          <IconButton onClick={() => swipe("right")}><Favorite /></IconButton>
        </NavigationButton>
        <NavigationButton>
          <IconButton onClick={() => swipe("left")}><Clear /></IconButton>
        </NavigationButton>
      </NavigationContainer>
    </Box>
  )
}

FoodCard2.propTypes = {
  swipeRight: PropTypes.func,
}


export default FoodCard2