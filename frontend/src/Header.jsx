import PropTypes from "prop-types"
import React from "react"

import { Paper, Grid, Box, Typography, IconButton } from "@mui/material"
import { History as HistoryIcon, Person as PersonIcon } from "@mui/icons-material"

const Header = ({setShowSideMenu}) => {
  
    return (
        <>
            <Paper square sx={{ position: "fixed", top: 0, left: 0, width: "100%" }}>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    direction="row"
                    alignItems="center"
                >
                    <Grid item xs>
                        <Box textAlign={"left"}>
                            <IconButton onClick={()=>setShowSideMenu(true)}>
                                <PersonIcon sx={{ p: 1 }} fontSize="large" 
                                />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box textAlign={"center"}>
                            <Typography fontSize="xx-large">🍽️</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box textAlign={"right"}>
                            <IconButton>
                                <HistoryIcon sx={{ p: 1 }} fontSize="large" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
           
        </>
    )
}

Header.propTypes = {
  setModalOpen: PropTypes.func,
  setShowSideMenu: PropTypes.func
}

export default Header
