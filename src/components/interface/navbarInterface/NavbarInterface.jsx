import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import{ useTheme }from "@mui/material/styles"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NavbarInterface = ({setMyMode}) => {

    const navigate = useNavigate();

    const toggleMode = () => {
        setMyMode(prevMode => (prevMode === "light" ? "dark" : "light"))
    }

    const theme = useTheme()

  return (
    <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:"#7b1fa2"}}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <AirplanemodeActiveIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    UF
                </Typography>
                <Button variant='contained'
                    onClick={() => navigate('/login')}
                    sx={{
                        backgroundColor:"#e65100",
                        color:"#fff"
                    }}
                >
                    Login
                </Button>
                <IconButton onClick={toggleMode} color="inherit" sx={{ ml: 2 }}>
                  {theme.palette.mode === 'dark' ? <WbSunnyIcon sx={{color:"yellow"}}/> : <DarkModeIcon />}
                </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
  )
}

export default NavbarInterface