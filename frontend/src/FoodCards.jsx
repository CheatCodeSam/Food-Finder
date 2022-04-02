import React, { useState, useEffect, useCallback, useRef } from "react"
import { Box } from "@mui/material"
import TinderCard from "react-tinder-card"
import styled from "@emotion/styled"
import fetchFood from "./fetchFood"
import FoodCard from "./FoodCard"

const FoodCardContainer = styled(Box)`
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

const FoodCards = () => {
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
    }, [])

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const swiped = (direction) => {
        setLastDirection(direction)
    }

    const outOfFrame = (idx) => {
        updateCurrentIndex(idx)
        if (currentIndexRef.current < 1) {
            getFood()
        }
    }

    return (
        <Box sx={{ padding: 0, margin: 0 }}>
            <FoodCardContainer>
                {food.map((dish, index) => (
                    <SwipeCard
                        key={dish.id}
                        onSwipe={(dir) => swiped(dir)}
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
            </FoodCardContainer>
        </Box>
    )
}

export default FoodCards
