import React, { useRef, useEffect } from "react"
import { disableBodyScroll } from "body-scroll-lock"
import { Box } from "@mui/material"
import HomePage from "./HomePage"

import "modern-normalize/modern-normalize.css"
import SignedInPage from "./SignedInPage"

const App = () => {
    const lock = useRef(null)

    useEffect(() => {
        disableBodyScroll(lock.current)
    })

    return (
        <Box ref={lock}>
            <SignedInPage />
        </Box>
    )
}

export default App
