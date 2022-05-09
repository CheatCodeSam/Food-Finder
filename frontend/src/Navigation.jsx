import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { House, LocationOn } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"

const NavigationContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0px 40px 0px;
    width: 100%;
    bottom: 0;
    z-index: -1;
`
const NavigationButton = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 20px 0px rgba(154, 159, 174, 0.2);
    &:active {
        transform: translate(5px, 5px);
        box-shadow: box-shadow: -10px -10px 0px 0px rgba(154, 159, 174, 0.2);
    }
`

const Navigation = (props) => {
    return (
        <NavigationContainer>
            <NavigationButton>
                <IconButton onClick={props.onToggleGeo}>
                    {props.usingGeo ? <LocationOn /> : <House />}
                </IconButton>
            </NavigationButton>
        </NavigationContainer>
    )
}

Navigation.propTypes = {
    onToggleGeo: PropTypes.func,
    usingGeo: PropTypes.bool,
}

export default Navigation
