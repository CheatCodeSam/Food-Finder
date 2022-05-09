import React from "react"
import styled from "@emotion/styled"

import IconButton from "@mui/material/IconButton"
import Button from "@mui/materialButton"
import { ArrowBackIosNew } from "@mui/icons-material"

const DefaultButton = styled.button`
    background-color: #FFC529;
    color: #FFEFC3;
    height: 60px;
    padding: 20px;
    margin: 10px;
    border-radius: 40px;
    border: none;
    box-shadow: 8px 8px 25px 0px rgba(56, 70, 103, 0.15);
`
const AltButton = styled(DefaultButton)`
    background-color: #FFEFC3;
    color: #FFC529;
    border: 2px solid #FFC529;
`

const Buttons = () => {
    return (
        <>
            <DefaultButton>LOG IN</DefaultButton>
            <AltButton>SIGN UP</AltButton>

            <IconButton>
                <ArrowBackIosNew />
            </IconButton>

            <Button
                startIcon={<ArrowBackIosNew />}
                sx={{ boxShadow: 3, borderRadius: 2 }}
            />
        </>
    );
}

export default Buttons