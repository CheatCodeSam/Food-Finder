import React, { useState, useRef, useEffect } from "react"
import { Box } from "@mui/system"
import fetchFood from "./fetchFood"

import FoodCards from "./FoodCards"

const HomePage = () => {
    const [DetailView, setDetailView] = useState(false)
    const [food, setFood] = useState([])
    const currentIndexRef = useRef(0)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((geopos) => {
            const lat = geopos.coords.latitude
            const long = geopos.coords.longitude
            getFood(lat, long).catch(console.error)
        })
    }, [])

    const getFood = async (lat, long) => {
        let _food = await fetchFood(lat, long)
        _food = _food.filter((item) => !food.map((f) => f.id).includes(item.id))
        setFood(_food.concat(food.slice(0, 5)))
        updateCurrentIndex(_food.length + currentIndexRef.current)
    }

    const updateCurrentIndex = (val) => (currentIndexRef.current = val)

    const outOfFrame = () => {
        updateCurrentIndex(currentIndexRef.current - 1)
        if (currentIndexRef.current === 5) {
            navigator.geolocation.getCurrentPosition((geopos) => {
                const lat = geopos.coords.latitude
                const long = geopos.coords.longitude
                getFood(lat, long).catch(console.error)
            })
        }
    }

    const swipeRight = (food) => {
        console.log("right :)", food)
    }

    return (
        <Box>
            <FoodCards food={food} swipeRight={swipeRight} outOfFrame={outOfFrame} />
        </Box>
    )
}

export default HomePage
