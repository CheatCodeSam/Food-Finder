import React, { useState, useEffect } from "react"
import propTypes from "prop-types"
import { Box, TextField, Button, Stack } from "@mui/material"
import { useFormik } from "formik"
import axios from "axios"

const SignUp = (props) => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password1: "",
            password2: "",
            addy: "",
        },
        onSubmit: async (values) => {
            console.log(values)
            const response = await axios.post("api/auth/registration/", values)
            localStorage.setItem("token", response.data.access_token)
            localStorage.setItem("id", response.data.user.pk)
            localStorage.setItem("username", response.data.user.username)
            axios.put(
                `api/users/${localStorage.getItem("id")}/`,
                { address: values.addy },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            )
            props.onLogin()
        },
    })
    return (
        <Box sx={{ width: "100vw", padding: 1 }}>
            <Stack
                spacing={4}
                sx={{
                    height: "100vh",
                    display: "flex",
                    alignContent: "center",
                }}
            >
                <Box
                    sx={{
                        height: "auto",
                        padding: 2,
                        backgroundColor: "#EBEBEB",
                        borderRadius: "20px",
                        margin: "auto",
                    }}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="User Name"
                            name="username"
                            autoComplete="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password1"
                            label="Password"
                            type="password"
                            id="password1"
                            value={formik.values.password1}
                            onChange={formik.handleChange}
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password2"
                            label="Enter Password Again"
                            type="password"
                            id="password2"
                            value={formik.values.password2}
                            onChange={formik.handleChange}
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            name="addy"
                            label="addy"
                            id="addy"
                            value={formik.values.addy}
                            onChange={formik.handleChange}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#FFC529",
                                borderRadius: 80,
                                boxShadow: "none",
                            }}
                            type="submit"
                            fullWidth
                        >
                            Sign Up
                        </Button>
                    </form>
                </Box>
            </Stack>
        </Box>
    )
}

SignUp.propTypes = {
    onLogin: propTypes.func,
}

export default SignUp
