import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { Box, Container, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"
import SideMenuBackdrop from "./SideMenuBackdrop"
import SideMenu from "./SideMenu"

const SideMenuModal = ({ onExit }) => {

    return (
        <SideMenuBackdrop onClick={onExit}>
            <div onClick={(e) => e.stopPropagation()}>
                <Container 
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 50,
                    }}
                >
                    <IconButton>
                        <NavButton>
                            <Close onClick={onExit} />
                        </NavButton>
                    </IconButton>
                </Container>
                <SideMenu />
            </div>
        </SideMenuBackdrop>
    )
}

SideMenuModal.propTypes = {
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

export default SideMenuModal