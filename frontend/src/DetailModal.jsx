import React from "react"
import PropTypes from "prop-types"
import { Paper, Box } from "@mui/material"
import { Close } from "@mui/icons-material"
import FoodDetail from "./FoodDetail"
import { motion } from "framer-motion"

const filtersUp = {
    hidden: {
        y: "100vh",
    },
    visible: {
        y: "0",
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 35,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
}

const DetailModal = (props) => {
    console.log(props.id)
    return (
        <motion.div
            style={{
                width: "100%",
                height: "100%",
            }}
            onClick={(e) => e.stopPropagation()}
            variants={filtersUp}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Paper
                sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100vh",
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
                <FoodDetail id={props.id} />
            </Paper>
        </motion.div>
    )
}

DetailModal.propTypes = {
    onExit: PropTypes.func,
    id: PropTypes.number,
}

export default DetailModal
