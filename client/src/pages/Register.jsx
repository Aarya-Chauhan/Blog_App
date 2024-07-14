import React, {useState} from 'react';
import {Box, Typography, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  //state
  const [inputs,setInputs] = useState({
    name:"",
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
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <Box maxWidth={450} display='flex' flexDirection='column' alignItems='center' justifyContent='center' margin='auto' marginTop={5} boxShadow="10px 10px 20px #ccc" padding={3} borderRadius={5}> 
          <Typography variant='h4' padding={3} textAlign={'center'} sx={{textTransform:"uppercase"}}>
            Register 
          </Typography>
          <TextField
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            margin="normal"
            type={"text"}
            required
          />
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
          <Button onClick={()=>navigate('/login')} sx={{margin:1}}>Already registered? jump to login</Button>
        </Box>
      </form>
    </>
  )
}

export default Register
