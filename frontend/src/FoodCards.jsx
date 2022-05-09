import React, { useState, useEffect, useCallback, useRef } from "react"
import PropTypes from "prop-types"
import { Box } from "@mui/material"
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
    const currentIndexRef = useRef(0)

    const getFood = async (lat, long) => {
        let _food = await fetchFood(lat, long)
        _food = _food.filter((item) => !food.map((f) => f.id).includes(item.id))
        setFood(_food.concat(food.slice(0, 5)))
        updateCurrentIndex(_food.length + currentIndexRef.current)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((geopos) => {
            const lat = geopos.coords.latitude
            const long = geopos.coords.longitude
            getFood(lat, long).catch(console.error)
        })
    }, [])

    const updateCurrentIndex = (val) => {
        currentIndexRef.current = val
        console.log(val)
    }

    const swiped = (dish, direction) => {
        if (direction === "right") {
            props.swipeRight(dish)
        }
    }

    const outOfFrame = () => {
        updateCurrentIndex(currentIndexRef.current - 1)
        if (currentIndexRef.current === 5) {
            navigator.geolocation.getCurrentPosition((geopos) => {
                const lat = geopos.coords.latitude
                const long = geopos.coords.longitude
                getFood(lat, long).catch(console.error)
            })
        }
    }

    return (
        <FoodCardContainer>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                {food.map((dish) => (
                    <SwipeCard
                        key={dish.id}
                        onSwipe={(dir) => swiped(dish, dir)}
                        onCardLeftScreen={outOfFrame}
                    >
                        <FoodCard
                            img={dish.image}
                            title={dish.title}
                            distance={dish.distance}
                            price={dish.price}
                        />
                    </SwipeCard>
                ))}
            </Box>
        </FoodCardContainer>
    )
}

FoodCards.propTypes = {
    swipeRight: PropTypes.func,
}

export default FoodCards
