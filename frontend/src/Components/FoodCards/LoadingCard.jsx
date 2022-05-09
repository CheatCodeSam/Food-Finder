import React from "react"
import { Box, CircularProgress } from "@mui/material"

const LoadingCard = () => {
    return (
        <Box
            height={"70vh"}
            width={"95vw"}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
            }}
        >
            <Box sx={{ margin: "auto" }}>
                <CircularProgress />
            </Box>
        </Box>
    )
}

export default LoadingCard
