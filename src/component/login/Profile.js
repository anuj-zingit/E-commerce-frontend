import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
function Profile({ user,setUser }) {
    const [open, setOpen] = useState(false);
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const logOut=()=>{
        setUser('')        
    }
    return (
        <>
            <Typography onClick={handleClick}>{user}</Typography>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{handleClose();logOut()}}><PowerSettingsNewIcon
                 color='primary'/>Logout</MenuItem>
            </Menu>
        </>
    )
}
export default Profile