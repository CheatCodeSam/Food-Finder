import React, { useState } from "react"
import { Box } from "@mui/system"
import { AnimatePresence } from "framer-motion"
import SideMenu from "./SideMenu"

import HomePage from "./HomePage"
import Header from "./Header"

const SignedInPage = () => {
    const [showSideMenu, setShowSideMenu] = useState(false)

    return (
        <Box>
            <Header onShowSideMenu={() => setShowSideMenu(true)} />
            <HomePage />
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                {showSideMenu && <SideMenu onExit={() => setShowSideMenu(false)} />}
            </AnimatePresence>
        </Box>
    )
}

export default SignedInPage
