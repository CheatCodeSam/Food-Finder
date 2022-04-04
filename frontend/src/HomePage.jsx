import React, { useState } from "react"
import { Box } from "@mui/system"
import FoodCards from "./FoodCards"
import DetailModal from "./DetailModal"

const HomePage = () => {
    const [DetailView, setDetailView] = useState(false)
    const [foodItem, setFoodItem] = useState({})

    const swipeRight = (foodItem) => {
        setDetailView(true)
        setFoodItem(foodItem)
    }

    const exitDetailView = () => {
        setDetailView(false)
    }

    return (
        <Box>
            <Box sx={{ position: "relative" }}>
                <FoodCards swipeRight={swipeRight} />
            </Box>
            {DetailView && <DetailModal dish={foodItem} onExit={exitDetailView} />}
        </Box>
    )
}

export default HomePage
