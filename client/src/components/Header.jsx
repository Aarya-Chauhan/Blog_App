import React, {useState} from 'react';
import {authActions} from '../redux/store'
import {Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Header = () => {
  const navigate = useNavigate()
  //global state
  let isLogin = useSelector(state=>state.isLogin);
  isLogin = isLogin||localStorage.getItem('userId')
  //dispatch
  const dispatch = useDispatch()
  //state
  const [value,setValue] = useState()
  //handleLogout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("logged out");
      localStorage.clear()
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
                <Tab label="Create" LinkComponent={Link} to="/create-blog" />
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
