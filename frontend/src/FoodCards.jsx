import React, { useState, useEffect, useCallback, useRef } from "react"
import PropTypes from "prop-types"
import { Box } from "@mui/material"
import { Undo, Clear, Favorite, Info } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import TinderCard from "react-tinder-card"
import styled from "@emotion/styled"
import fetchFood from "./fetchFood"
import FoodCard from "./FoodCard"

const FoodCardContainer = styled(Box)`
    position: absolute;
    margin-top: 15vh;
    padding: 0;
    background-color: #f5f5f5;
    width: 100%;
`
const SwipeCard = styled(TinderCard)`
    position: absolute;
`

const FoodCards = (props) => {
    const [food, setFood] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [lastDirection, setLastDirection] = useState()

    const currentIndexRef = useRef(0)

    const getFood = useCallback(async (lat, long) => {
        const _food = await fetchFood(lat, long)
        setFood(_food)
        updateCurrentIndex(_food.length)
    }, [])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((geopos) => {
            const lat = geopos.coords.latitude
            const long = geopos.coords.longitude
            getFood(lat, long).catch(console.error)
        })
    }, [])

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const swiped = (dish, direction) => {
        setLastDirection(direction)
        if (direction === "right") {
            props.swipeRight(dish)
        }
        console.log(direction)
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
    }

    return (
        <Box>
            <FoodCardContainer>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {food.map((dish, index) => (
                        <SwipeCard
                            key={dish.img}
                            onSwipe={({swipeDirection}) => swiped(dish, {swipeDirection})}
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
        </Box>
    )
}

FoodCards.propTypes = {
  swipeDirection: PropTypes.string,
  swipeRight: PropTypes.func
}

export default FoodCards
