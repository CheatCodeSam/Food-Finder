import React from "react"
import PropTypes from "prop-types"
import { Box, CircularProgress } from "@mui/material"
import TinderCard from "react-tinder-card"
import styled from "@emotion/styled"
import FoodCard from "./FoodCard"

const FoodCardContainer = styled(Box)`
    position: absolute;
    margin-top: 15vh;
    padding: 0;
    width: 100%;
`
const SwipeCard = styled(TinderCard)`
    position: absolute;
`

const FoodCards = ({ food, outOfFrame, swipeRight }) => {
    const swiped = (dish, direction) => {
        if (direction === "right") {
            swipeRight(dish)
        }
    }

    if (food.length === 0) {
        return (
            <FoodCardContainer>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        height: "70vh",
                    }}
                >
                    <Box
                        height={"70vh"}
                        width={"95vw"}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                        }}
                    >
                        <Box sx={{ margin: "auto" }}>
                            <CircularProgress />
                        </Box>
                    </Box>
                </Box>
            </FoodCardContainer>
        )
    }

    return (
        <FoodCardContainer>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "70vh",
                }}
            >
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
    food: PropTypes.array,
    outOfFrame: PropTypes.func,
}

export default FoodCards
