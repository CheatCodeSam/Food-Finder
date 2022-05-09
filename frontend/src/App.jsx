import React, { useRef, useEffect, useState } from "react"
import { disableBodyScroll } from "body-scroll-lock"
import { Box } from "@mui/material"
import HomePage from "./HomePage"

import "modern-normalize/modern-normalize.css"
import SignedInPage from "./SignedInPage"
import Login from "./Login"

import axios from "axios"
import SignUp from "./SignUp"
import IsSignedIn from "./IsSignedIn"

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"

const App = () => {
    const lock = useRef(null)
    const [signedIn, setSignedIn] = useState(false)

    useEffect(() => {
        disableBodyScroll(lock.current)
    })

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setSignedIn(true)
        }
    }, [])

    return (
        <Box ref={lock}>
            {signedIn ? (
                <SignedInPage />
            ) : (
                <IsSignedIn onLogin={() => setSignedIn(true)} />
            )}
        </Box>
    )
}

export default App
