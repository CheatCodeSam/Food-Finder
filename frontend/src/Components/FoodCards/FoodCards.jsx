import React from "react"
import PropTypes from "prop-types"
import TinderCard from "react-tinder-card"
import styled from "@emotion/styled"
import FoodCard from "./FoodCard"

const SwipeCard = styled(TinderCard)`
    position: absolute;
`

const FoodCards = ({ food, outOfFrame, swipeRight }) => {
    const swiped = (dish, direction) => {
        if (direction === "right") {
            swipeRight(dish)
        }
    }

    return (
        <>
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
        </>
    )
}

FoodCards.propTypes = {
    swipeRight: PropTypes.func,
    food: PropTypes.array,
    outOfFrame: PropTypes.func,
}

export default FoodCards
