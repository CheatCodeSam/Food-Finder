import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { Box, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"
import { motion } from "framer-motion"
import Filter from "./Filter"
import FilterBackdrop from "./FilterBackdrop"

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

const FilterModal = ({ onExit }) => {
    return (
        <FilterBackdrop onClick={onExit}>
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
                <Filter />
                <Box
                    sx={{
                        position: "absolute",
                        top: 65,
                        right: 5,
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <NavButton>
                        <IconButton>
                            <Close onClick={onExit} />
                        </IconButton>
                    </NavButton>
                </Box>
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        bottom: 20,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ApplyButton onClick={onExit}>APPLY</ApplyButton>
                </div>
            </motion.div>
        </FilterBackdrop>
    )
}

FilterModal.propTypes = {
    onExit: PropTypes.any,
}

const NavButton = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 20px 0px rgba(154, 159, 174, 0.2);
    &:active {
        transform: translate(2px, 2px);
        box-shadow: box-shadow: -10px -10px 0px 0px rgba(154, 159, 174, 0.2);
}
`
const ApplyButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFC529;
    color: #FFEFC3;
    height: 50px;
    padding: 20px;
    border-radius: 40px;
    border: none;
    box-shadow: 8px 8px 25px 0px rgba(56, 70, 103, 0.15);
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin: 2px;
    &:active {
        transform: translate(2px, 2px);
        box-shadow: box-shadow: -10px -10px 0px 0px rgba(154, 159, 174, 0.2);
    }
`


export default FilterModal
