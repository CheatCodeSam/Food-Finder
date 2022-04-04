import React, { useRef, useEffect } from "react"
import { disableBodyScroll } from "body-scroll-lock"
import { Box } from "@mui/material"

import Header from "./Header"
import HomePage from "./HomePage"

const App = () => {
    const lock = useRef(null)

    useEffect(() => {
        disableBodyScroll(lock.current)
    })

    return (
        <Box ref={lock}>
            <Header />
            <HomePage />
        </Box>
    )
}

export default App
