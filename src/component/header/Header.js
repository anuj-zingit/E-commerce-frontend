import React from 'react';
import SearchBar from './SearchBar';
import CustomButton from './CustomButton';
import { AppBar, Toolbar, Box ,SubHeading, Typography} from '@mui/material'
function Header() {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <div>
      <AppBar id='AppBar'>
        <Toolbar>
          <Box className="logo">
            <img src={logoURL} alt='logoURL'/>
            <Typography className="subHeading">explore <span >plus</span> <img src={subURL} alt='subURL'/></Typography>
          </Box>
          <SearchBar/>
          <CustomButton/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
