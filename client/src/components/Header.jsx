import React, {useState} from 'react';
import {authActions} from '../redux/store'
import {Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate()
  //global state
  const isLogin = useSelector(state=>state.isLogin);
  //dispatch
  const dispatch = useDispatch()
  //state
  const [value,setValue] = useState()
  //handleLogout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      alert("logged out");
      navigate('/login')  ;
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>
    <AppBar position='sticky'>
        <Toolbar>
            <Typography variant='h4'>
                My Blog App
            </Typography>
            {isLogin && (
              <Box display={"flex"} marginLeft={"auto"} marginRight={"auto"}>
              <Tabs textColor='inherit' value={value} onChange={(e,val) => {setValue(val)}} >
                <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
                <Tab label="My BLogs" LinkComponent={Link} to="/my-blogs" />
              </Tabs>
            </Box>
            )}
            <Box display={'flex'} marginLeft="auto">
              {!isLogin && (
                <>
                  <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/login">Login</Button>
                  <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/register">Register</Button>
                </>
              )}
              {isLogin && (
                  <Button sx={{margin:1,color:'white'}} onClick={handleLogout} >Logout</Button>
              )}
            </Box>
        </Toolbar>
    </AppBar >
    </>
  )
}

export default Header
