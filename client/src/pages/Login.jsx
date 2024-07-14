import React, {useState} from 'react';
import {Box, Typography, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {authActions} from '../redux/store'
import axios from "axios";


const Login = () => {
    const navigate = useNavigate()
    const despatch = useDispatch()
    //state
    const [inputs,setInputs] = useState({
      email:"",
      password:"",
    })
    //handleChange
    const handleChange = (e) => {
      setInputs(prevState =>({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
    //handleSubmit
    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const {data} = await axios.post('/api/v1/user/login',{email:inputs.email,
          password:inputs.password
        })
        if(data.success){
          despatch(authActions.login());
          alert("user login succesful")
          navigate('/');
        }
      } catch (error) {
        console.log(error)
      }
    }
    return (
      <>
      <form onSubmit={handleSubmit}>
          <Box maxWidth={450} display='flex' flexDirection='column' alignItems='center' justifyContent='center' margin='auto' marginTop={5} boxShadow="10px 10px 20px #ccc" padding={3} borderRadius={5}> 
            <Typography variant='h4' padding={3} textAlign={'center'} sx={{textTransform:"uppercase"}}>
              Login
            </Typography>
            <TextField
              placeholder="email"
              value={inputs.email}
              name="email"
              margin="normal"
              type={"email"}
              required
              onChange={handleChange}
            />
            <TextField
              placeholder="password"
              value={inputs.password}
              name="password"
              margin="normal"
              type={"password"}
              required
              onChange={handleChange}
            />
            <Button type='submit' variant='contained' color='primary' sx={{borderRadius:3,marginTop:3}}>submit</Button>
            <Button onClick={()=>navigate('/register')} sx={{margin:1}}>New user? register here!!</Button>
          </Box>
        </form>
      </>
    )
  }

export default Login
