import React from "react"
import PropTypes from "prop-types"
import { Box, Card, CardMedia, Container, Typography } from "@mui/material"
import { Star, LocationOn } from "@mui/icons-material"
import styled from "@emotion/styled"

const StyledTypography = styled(Typography)`
    color: #1a1d26;
    font-family: "Montserrat", sans-serif;
    margin: 2px;
`
const FoodTitle = styled(StyledTypography)`
    font-weight: bold;
`
const FoodBusiness = styled(StyledTypography)`
    display: flex;
    align-items: center;
    font-weight: 600;
`
const FoodRating = styled(FoodBusiness)`
    font-weight: 700;
    background-color: #ebebeb;
    margin: 0;
    padding: 2px;
    border-radius: 5px;
`
const FoodDistance = styled(StyledTypography)`
    background-color: #ebebeb;
    margin: 0;
    padding: 2px;
    border-radius: 5px;
    font-weight: 600;
`
const FoodPrice = styled(StyledTypography)`
    color: #ffc529;
    font-weight: bold;
    margin: 5px;
`
const FoodDetailContainer = styled(Container)`
    padding: 0;
`
const FoodDescription = styled(StyledTypography)`
    color: #a8acb9;
    background-color: #ebebeb;
    border-radius: 10px;
    padding: 5px;
    font-size: 15px;
    font-weight: 500;
`

const FoodDetail = ({ dish }) => {
    return (
        <Box>
            <Card
                sx={{
                    height: "40vh",
                    borderRadius: "10px",
                }}
            >
                <CardMedia component="img" image={dish.img} width="100%" height="100%" />
            </Card>

            <FoodDetailContainer>
                <FoodTitle variant="h4">{dish.title}</FoodTitle>
                <FoodBusiness variant="h5">
                    <LocationOn style={{ color: "FFC529" }} /> {dish.business}
                </FoodBusiness>
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 0,
                    }}
                >
                    <div>
                        <FoodRating variant="subtitle4">
                            <Star style={{ fontSize: "20", color: "009933" }} />{" "}
                            {dish.rating}
                        </FoodRating>
                    </div>
                    <FoodDistance>
                        {(dish.distance * 0.000621371192).toFixed(2)} mi
                    </FoodDistance>
                </Container>
                <FoodPrice variant="h4">{dish.price}</FoodPrice>
                <FoodDescription>
                    <p>{dish.address} </p>
                    <p>
                        {dish.city}, {dish.state}{" "}
                    </p>
                </FoodDescription>
            </FoodDetailContainer>
        </Box>
    )
}

FoodDetail.propTypes = {
    dish: PropTypes.object,
}

export default FoodDetail
