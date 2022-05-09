import React from "react"
import { Box, Slider, Typography } from "@mui/material"
import PropTypes from "prop-types"

const marks = [
    {
        value: 1,
        label: "$",
    },
    {
        value: 4,
        label: "$$$$",
    },
]

const Filter = ({ distance, handleDistanceChange, handlePriceChange }) => {
    return (
        <Box
            sx={{
                position: "absolute",
                top: 60,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#f5f5f5",
                borderRadius: "10px",
            }}
        >
            <Box
                sx={{
                    padding: "40px",
                    paddingTop: "70px",
                }}
            >
                <Typography gutterBottom>Price</Typography>
                <Slider
                    sx={{ color: "limegreen" }}
                    defaultValue={4}
                    step={1}
                    marks={marks}
                    min={1}
                    max={4}
                    onChange={handlePriceChange}
                />
                <Typography gutterBottom>Distance</Typography>
                <Slider
                    defaultValue={10000}
                    step={5000}
                    min={5000}
                    max={30000}
                    onChange={handleDistanceChange}
                />
                <Typography gutterBottom sx={{ float: "right" }}>
                    {distance / 1000} Miles
                </Typography>
            </Box>
        </Box>
    )
}

Filter.propTypes = {
    handlePriceChange: PropTypes.func,
    handleDistanceChange: PropTypes.func,
    distance: PropTypes.number,
}

export default Filter
