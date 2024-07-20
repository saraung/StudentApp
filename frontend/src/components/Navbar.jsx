import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { yellow } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'purple',margin:5}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student
          </Typography>
         <Button ><Link to={"/"} style={{textDecoration :"none",color:"white"}}>View</Link></Button>
         <Button ><Link to={"a"} style={{textDecoration :"none",color:"white"}}>Add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box> 
    </div>
  )
}
export default Navbar
