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
    const [currentIndex, setCurrentIndex] = useState(0)
    const [lastDirection, setLastDirection] = useState()

    const currentIndexRef = useRef(0)

    const getFood = useCallback(async () => {
        const _food = await fetchFood()
        setFood(_food)
        updateCurrentIndex(_food.length)
    }, [])

    useEffect(() => {
        getFood().catch(console.error)
        navigator.geolocation.getCurrentPosition(console.log)
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
    }

    const outOfFrame = (idx) => {
        updateCurrentIndex(idx)
        if (idx < 1) {
            getFood()
        }
    }

    return (
        <FoodCardContainer>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                {food.map((dish, index) => (
                    <SwipeCard
                        key={dish.id}
                        onSwipe={(dir) => swiped(dish, dir)}
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
    )
}

FoodCards.propTypes = {
    swipeRight: PropTypes.func,
}

export default FoodCards
