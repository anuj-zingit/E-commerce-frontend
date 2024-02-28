import { Box, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from '../login/Login';
import React from 'react'
import { useState , useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from '../login/Profile';

function CustomButton() {
  const [open,setOpen]=useState(false);

  const {user,setUser}=useContext(DataContext);

  const handlelogin=()=>{
    setOpen(true)
}
  return (
    <div id='CustomButton'>
      {
        user ? <Profile user={user} setUser={setUser}/>:<Button  onClick={handlelogin} variant='Contained'>Login</Button>
      }      
      <div>
        <Typography>Become a Seller</Typography>
      </div>
      <div>
        <Typography>More</Typography>
      </div>
      <div>
        <Box className='shoppingKart'>
          <ShoppingCartIcon />
          <Typography>Cart</Typography>
        </Box>
        <Login open={open} setOpen={setOpen}/>      
      </div>
    </div>
  )
}

export default CustomButton;
