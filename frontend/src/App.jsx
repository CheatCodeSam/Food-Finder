import React, { useRef, useEffect } from "react"

import { disableBodyScroll } from "body-scroll-lock"

import { Container, Typography, Box, Button } from "@mui/material"
import { Article as ArticleIcon } from "@mui/icons-material"

const App = () => {
    const lock = useRef(null)

    useEffect(() => {
        disableBodyScroll(lock.current)
    })

    return (
        <Container maxWidth="sm" ref={lock}>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    React + MUI App Example 🌟
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    MUI provides a robust, customizable, and accessible library of
                    foundational and advanced components, enabling you to build your own
                    design system and develop React applications faster.
                </Typography>
                <Button
                    variant="contained"
                    href="https://mui.com/getting-started/installation/"
                    target="_blank"
                    startIcon={<ArticleIcon />}
                >
                    See Documentation
                </Button>
            </Box>
        </Container>
    )
}

export default App
