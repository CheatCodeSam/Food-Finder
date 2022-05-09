import React, { useState } from "react"
import { Box } from "@mui/system"
import { AnimatePresence } from "framer-motion"

import Header from "./Header"
import Search from "./Search"
import FoodCards from "./FoodCards"
import DetailModal from "./DetailModal"
import Navigation from "./Navigation"
import SideMenu from "./SideMenu"
import FilterModal from "./FilterModal"

const HomePage = () => {
    const [DetailView, setDetailView] = useState(false)
    const [foodItem, setFoodItem] = useState({})
    const [swipeDirection, setSwipeDirection] = useState("")
    const [showSideMenu, setShowSideMenu] = useState(false)
    const [showFilter, setShowFilter] = useState(false)

    const swipeRight = (foodItem) => {
        setDetailView(true)
        setFoodItem(foodItem)
    }
    const exitDetailView = () => {
        setDetailView(false)
    }
    const exitSideMenu = () => {
        setShowSideMenu(false)
    }
    const exitFilter = () => {
        setShowFilter(false)
    }

    return (
        <Box>
            <Header setShowSideMenu={setShowSideMenu} />
            <Search setShowFilter={setShowFilter} />
            <Box sx={{ position: "relative" }}>
                <FoodCards swipeRight={swipeRight} swipeDirection={swipeDirection} />
            </Box>
            <Navigation setSwipeDirection={setSwipeDirection} />
            {DetailView && <DetailModal dish={foodItem} onExit={exitDetailView} />}

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
            >
                {showFilter && <FilterModal showFilter={showFilter} onExit={exitFilter} />}
                {showSideMenu && <SideMenu showSideMenu={showSideMenu} onExit={exitSideMenu} />}
            </AnimatePresence>
        </Box>
    )
}

export default HomePage
