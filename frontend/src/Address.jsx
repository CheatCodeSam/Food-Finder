import PropTypes from "prop-types"
import React from "react"
import { TextField, Box, Typography, Button, Grid, Stack, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"
import { useFormControl } from "@mui/material/FormControl"
import styled from "@emotion/styled"
import { motion } from "framer-motion"


const slideIn = {
    hidden: {
        x: "-100vh",
    },
    visible: {
        x: "0",
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 40,
            stiffness: 500,
        }
    },
    exit: {
        x: "-100vh",
        opacity: 0,
    },
}

const Address = ({ onExit }) => {
    return (
        <motion.div
            style={{ 
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw", 
            height: "100%" ,
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center"
            }}
            onClick={(e) => e.stopPropagation()}
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Box sx={{backgroundColor: "cyan", width: "100vw", padding: 1 }}>
                <IconButton>
                    <NavButton>
                        <Close onClick={onExit} />
                    </NavButton>
                </IconButton>
                <Typography>Address</Typography>
                <Stack
                    spacing={4}
                    sx={{
                        padding: 2,
                        backgroundColor: "#EBEBEB",
                        borderRadius: "20px",
                    }}
                >
                    <StyledTextField
                        label="Street Address"
                        variant="outlined"
                    />
                    <StyledTextField
                        label="City"
                        variant="outlined"
                    />
                    <StyledTextField
                        label="State"
                        variant="outlined"
                    />
                    <StyledTextField
                        label="Postal Code"
                        variant="outlined"
                    />
                    <Button variant="contained" onClick={onExit}>Save</Button>
                </Stack>
            </Box>
        </motion.div>
    )
}

Address.propTypes = {
  onExit: PropTypes.func
}

const StyledTextField = styled(TextField)`
    background-color: #fff;
    font-family: "Montserrat", sans-serif;
`
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

export default Address;