import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import {
    TextField,
    Box,
    Typography,
    Button,
    Container,
    Stack,
    IconButton,
    Avatar,
} from "@mui/material"
import { Close } from "@mui/icons-material"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { useFormik } from "formik"
import Cookies from "js-cookie"
import axios from "axios"

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
        },
    },
    exit: {
        x: "-100vh",
        opacity: 0,
    },
}

const Profile = ({ onExit }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    useEffect(() => {
        const response = axios.get(`api/users/${localStorage.getItem("id")}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        console.log(response)
    }, [])

    const formik = useFormik({
        initialValues: {
            address: "",
        },
        onSubmit: (values) => {
            axios.put(`api/users/${localStorage.getItem("id")}/`, values, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
        },
    })
    return (
        <motion.div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Box sx={{ width: "100vw", padding: 1 }}>
                <IconButton>
                    <NavButton>
                        <Close onClick={onExit} />
                    </NavButton>
                </IconButton>
                <Container
                    sx={{
                        padding: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Container sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ marginTop: 2 }}>
                            <StyledAvatar src="https://i.imgur.com/R9Qt4Le.png" />
                            <StyledTypography variant="h5">
                                {localStorage.getItem("username")}
                            </StyledTypography>
                        </Box>
                    </Container>
                </Container>
                <Stack
                    spacing={4}
                    sx={{
                        padding: 2,
                        backgroundColor: "#EBEBEB",
                        borderRadius: "20px",
                    }}
                >
                    <form onSubmit={formik.handleSubmit} style={{ display: "contents" }}>
                        <StyledTextField
                            label="Address"
                            variant="outlined"
                            id="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#FFC529",
                                borderRadius: 80,
                                boxShadow: "none",
                            }}
                            onClick={onExit}
                            type="submit"
                        >
                            Save
                        </Button>
                    </form>
                </Stack>
            </Box>
        </motion.div>
    )
}

Profile.propTypes = {
    onExit: PropTypes.func,
}

const StyledTextField = styled(TextField)`
    background-color: #fff;
    font-family: "Montserrat", sans-serif;
    margin: 6px;
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
const StyledTypography = styled(Typography)`
    color: #1a1d26;
    font-family: "Montserrat", sans-serif;
`
const StyledAvatar = styled(Avatar)`
    width: 100px;
    height: 100px;
    display: block;
    box-shadow: 0px 8px 40px 0px rgba(255, 197, 41, 0.25);
    &:active {
        transform: translate(2px, 2px);
    }
`
export default Profile
