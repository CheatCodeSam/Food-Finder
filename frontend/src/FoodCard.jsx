import React from "react"
import PropTypes from "prop-types"
import { Card, CardMedia, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { LocationOnOutlined as LocationOnOutlinedIcon } from "@mui/icons-material"

const FoodName = styled(Typography)`
    color: #fff;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`
const FoodDistance = styled(FoodName)`
    display: flex;
    align-items: center;
    font-weight: 400;
`
const FoodPrice = styled(FoodName)`
    margin-left: 7px;
    color: #009933;
`

const FoodCard = ({ img, title, distance, price }) => {
    const getMiles = (meters) => {
        return meters * 0.000621371192
    }
    return (
        <Card
            sx={{
                width: "95vw",
                height: "70vh",
                // boxShadow: "2px 2px 10px 0px rgba(154, 159, 174, 1)",
            }}
        >
            <CardMedia component="img" image={img} width="100%" height="100%" />
            <div
                style={{
                    position: "absolute",
                    bottom: 20,
                    margin: "10px",
                }}
            >
                <FoodName variant="h3">{title}</FoodName>
                <FoodDistance variant="subtitle1">
                    <LocationOnOutlinedIcon /> {getMiles(distance).toFixed(2)} Miles
                </FoodDistance>
                <FoodPrice>{price}</FoodPrice>
            </div>
        </Card>
    )
}

FoodCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    distance: PropTypes.number,
    price: PropTypes.array,
}

export default FoodCard
