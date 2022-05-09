import React from "react"
import PropTypes from "prop-types"
import { Box } from "@mui/material"
import styled from "@emotion/styled"
import FoodCards from "./FoodCards"
import LoadingCard from "./LoadingCard"

const FoodCardContainerOuter = styled(Box)`
    position: absolute;
    margin-top: 15vh;
    padding: 0;
    width: 100%;
`

const FoodCardContainer = (props) => {
    return (
        <FoodCardContainerOuter>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "70vh",
                }}
            >
                {props.food.length !== 0 ? <FoodCards {...props} /> : <LoadingCard />}
            </Box>
        </FoodCardContainerOuter>
    )
}

FoodCardContainer.propTypes = {
    swipeRight: PropTypes.func,
    food: PropTypes.array,
    outOfFrame: PropTypes.func,
}

export default FoodCardContainer
