import { AppBar,Box,Button,Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      < Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student App
          </Typography>
          <Button color="inherit">Login</Button>
          <Button><Link to={'/'} style={{ textDecoration: "none", color: "white"}}>View</Link></Button>
          <Button><Link to={'/d'} style={{ textDecoration: "none", color: "white"}}>Add</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
