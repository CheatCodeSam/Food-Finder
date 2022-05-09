import React, { useState } from "react"
import propTypes from "prop-types"

import { Box } from "@mui/system"
import Login from "./Login"
import SignUp from "./SignUp"
import { Button } from "@mui/material"

const IsSignedIn = ({ onLogin }) => {
    const [showlogin, setShowLogin] = useState(true)

    return (
        <Box>
            {showlogin ? <Login onLogin={onLogin} /> : <SignUp onLogin={onLogin} />}

            <Button
                sx={{ position: "absolute", left: "10px", top: "10px" }}
                onClick={() => setShowLogin(!showlogin)}
            >
                Toggle
            </Button>
        </Box>
    )
}

IsSignedIn.propTypes = {
    onLogin: propTypes.func,
}

export default IsSignedIn
