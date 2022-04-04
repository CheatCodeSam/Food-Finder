import React from "react"
import PropTypes from "prop-types"
import { Paper, Box } from "@mui/material"
import { Close } from "@mui/icons-material"
import FoodDetail from "./FoodDetail"

const DetailModal = (props) => {
    return (
        <Paper
            sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                borderRadius: 4,
            }}
            elevation={4}
        >
            <Box
                sx={{
                    borderBottom: "1px solid #CCC",
                    display: "flex",
                    height: "40px",
                    alignItems: "center",
                    padding: "5px",
                    paddingLeft: "15px",
                }}
            >
                <Close onClick={props.onExit} />
            </Box>
            <FoodDetail dish={props.dish} />
        </Paper>
    )
}

DetailModal.propTypes = {
    onExit: PropTypes.func,
    dish: PropTypes.object,
}

export default DetailModal
