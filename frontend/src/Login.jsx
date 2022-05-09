import React, { useState, useEffect } from "react"
import propTypes from "prop-types"
import { Box, TextField, Button, Container, Stack } from "@mui/material"
import { useFormik } from "formik"
import axios from "axios"

const Login = (props) => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values) => {
            console.log(values)
            const response = await axios.post("api/auth/login/", values)
            localStorage.setItem("token", response.data.access_token)
            localStorage.setItem("id", response.data.user.pk)
            localStorage.setItem("username", response.data.user.username)
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
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            autoComplete="current-password"
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
                            Sign In
                        </Button>
                    </form>
                </Box>
            </Stack>
        </Box>
    )
}

Login.propTypes = {
    onLogin: propTypes.func,
}

export default Login
