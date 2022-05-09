import React, { useState, useRef, useEffect } from "react"
import { Box } from "@mui/system"
import fetchFood from "./fetchFood"
import Navigation from "./Navigation"
import { FoodCardContainer as FoodCards } from "./Components/FoodCards"

const HomePage = () => {
    const [DetailView, setDetailView] = useState(false)

    const [food, setFood] = useState([])
    const [geo, setGeo] = useState(true)
    const currentIndexRef = useRef(0)

    useEffect(() => {
        getFoodFromLocation({}, getFood)
    }, [])

    const getFoodFromLocation = async (params, func) => {
        navigator.geolocation.getCurrentPosition((geopos) => {
            const lat = geopos.coords.latitude
            const long = geopos.coords.longitude
            func({ lat, long, ...params }).catch(console.error)
        })
    }

    const getFoodFromAddress = async (params, func) => {
        func({ address: true, ...params }).catch(console.error)
    }

    const repingApi = async (newGeo, params) => {
        currentIndexRef.current = 0
        setFood([])
        if (newGeo) {
            getFoodFromLocation(params, getFood)
        } else {
            getFoodFromAddress(params, getFood)
        }
    }

    const getFood = async (params) => {
        let _food = await fetchFood(params)
        setFood(_food)
        updateCurrentIndex(_food.length)
    }

    const getMoreFood = async (params) => {
        let _food = await fetchFood(params)
        _food = _food.filter((item) => !food.map((f) => f.id).includes(item.id))
        setFood(_food.concat(food.slice(0, 5)))
        updateCurrentIndex(_food.length + currentIndexRef.current)
    }

    const updateCurrentIndex = (val) => (currentIndexRef.current = val)

    const outOfFrame = () => {
        updateCurrentIndex(currentIndexRef.current - 1)
        if (currentIndexRef.current === 5) {
            if (geo) {
                getFoodFromLocation({}, getMoreFood)
            } else {
                getFoodFromAddress({}, getMoreFood)
            }
        }
    }

    const swipeRight = (food) => {
        console.log("right :)", food)
    }

    const resetGeo = () => {
        const newGeo = !geo
        setGeo(newGeo)
        repingApi(newGeo, {})
    }

    return (
        <Box>
            <FoodCards food={food} swipeRight={swipeRight} outOfFrame={outOfFrame} />
            <Navigation usingGeo={geo} onToggleGeo={resetGeo} />
        </Box>
    )
}

export default HomePage
