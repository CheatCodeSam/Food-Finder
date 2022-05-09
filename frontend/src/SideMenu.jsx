import PropTypes from "prop-types"
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Box, Container, Typography, IconButton, Avatar } from "@mui/material"
import { Close, Person, Star, LocationOn, Settings, HelpCenter, PowerSettingsNew } from "@mui/icons-material"
import { motion, AnimatePresence } from "framer-motion"
import SideMenuBackdrop from "./SideMenuBackdrop"
import Profile from "./Profile"
import Address from "./Address"

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

const SideMenu = ({ onExit }) => {
    const [showProfile, setShowProfile] = useState(false)
    const [showAddress, setShowAddress] = useState(false)

    const exitProfile = () => {
        setShowProfile(false)
    }
    const exitAddress = () => {
        setShowAddress(false)
    }

    return (
        <SideMenuBackdrop onClick={onExit}>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    padding: "5px",
                    width: "55vw",
                    height: "100%",
                    backgroundColor: "#f5f5f5"
                }}
                onClick={(e) => e.stopPropagation()}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Box>
                    <Container sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                        <Container><StyledAvatar src="https://i.imgur.com/R9Qt4Le.png" /></Container>
                        <Container>
                            <IconButton>
                                <NavButton>
                                    <Close onClick={onExit} />
                                </NavButton>
                            </IconButton>
                        </Container>
                    </Container>
                    <Container sx={{ marginTop: 2 }}>
                        <StyledTypography variant="h5">Name</StyledTypography>
                        <StyledTypography variant="subtitle4">email</StyledTypography>
                    </Container>
                </Box>
                <Box sx={{ marginTop: 5, marginLeft: 1 }}>
                    <List onClick={() => setShowProfile(true)}>
                        <Person /> <ListText>Profile</ListText>
                    </List>
                    <List>
                        <Star /> <ListText>Favorites</ListText>
                    </List>
                    <List onClick={() => setShowAddress(true)}>
                        <LocationOn /> <ListText>Location</ListText>
                    </List>
                    <List>
                        <Settings /> <ListText>Preferences</ListText>
                    </List>
                    <List>
                        <HelpCenter /> <ListText>Support</ListText>
                    </List>
                </Box>
                <Box sx={{ position: "absolute", bottom: 30 }}>
                    <LogOutButton><PowerSettingsNew />Log Out</LogOutButton>
                </Box>
            </motion.div>

            <AnimatePresence>
                {showProfile && <Profile showProfile={showProfile} onExit={exitProfile} />}
                {showAddress && <Address showAddress={showAddress} onExit={exitAddress} />}
            </AnimatePresence>

        </SideMenuBackdrop>
    )
}

SideMenu.propTypes = {
    onExit: PropTypes.func,
}

const SideMenuContainer = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1;
    width: 55vw;
    height: 100%;
    background-color: #F5F5F5;
`
const StyledAvatar = styled(Avatar)`
    width: 100px;
    height: 100px;    
    box-shadow: 0px 8px 40px 0px rgba(255, 197, 41, 0.25);
    &:active {
        transform: translate(2px, 2px);
    }
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
    margin: 2px;
`
const ListText = styled(StyledTypography)`
    font-weight: 500;
    font-size: 16px;
`
const List = styled.li`
    margin-top: 25px;
    color: #9A9FAE;
    display: flex;
    align-items: center;
    &:active {
        transform: translate(2px, 2px);
        color: #FFC529;
    }
`
const LogOutButton = styled.button`  
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

export default SideMenu