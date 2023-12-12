import React, { useEffect } from 'react'
import { useState } from 'react'
import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import igicon from '../images/Instagram_logo.png'
import { useNavigate } from "react-router-dom"
import url from '../../api'

const SignUp = () => {

  useEffect(()=>{
    document.title = "Sign Up to Instagram"
  });

  let Navigate = useNavigate();
  const logIn = () => {
    Navigate("/Login")
  }


  const paperStyle = {
    padding: "25px 20px ",
    width: 400,
    margin: "25px auto",
    align: 'center'
  }

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    let item = { username, firstname, lastname, mobileno, email, password }
    console.warn(item)
    let result = await fetch(url + 'user/insert', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    })
    result = await result.json();
    console.warn("result", result)
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/Login")
  }



  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <img style={{ position: 'absolute', marginTop: '-20px', marginLeft: '-70px', left: '50%', height: '75px', width: '150px', justifyContent: "center" }} className='meta_icon' src={igicon} alt='#' />
        <br />
        <br />
        <Typography marginBottom="20px" varient='caption' align='center'> Sign up to see photos and videos from your friends</Typography>
        <form>
          <TextField value={username} onChange={(e) => setUsername(e.target.value)} sx={{ mb: 2 }} name="username" id="username" fullWidth label='Username' />
          <TextField value={firstname} onChange={(e) => setFirstname(e.target.value)} sx={{ mb: 2 }} name="firstname" id="firstname" fullWidth label='First Name' />
          <TextField value={lastname} onChange={(e) => setLastname(e.target.value)} sx={{ mb: 2 }} name="lastname" id="lastname" fullWidth label='Last Name' />
          <TextField value={mobileno} onChange={(e) => setMobileno(e.target.value)} sx={{ mb: 2 }} name="mobileno" id="mobileno" fullWidth label='Mobile Number' />
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 2 }} name="email" id="email" fullWidth label='Email' />
          <TextField value={password} onChange={(e) => setPassword(e.target.value)} sx={{ mb: 2 }} name="password" id="password" fullWidth label='Password' />
          <TextField sx={{ mb: 2 }} name="cpassword" id="cpassword" fullWidth label=' Confirm Password' />
        </form>

        <Typography varient='caption' align='center' marginTop="10px">
          People who use our service may have uploaded your contact information to Instagram.
        </Typography>

        <Typography varient='caption' align='center' marginTop="10px">
          By signing up,you are agree to our Terms,Data Policy and Cookies Policy.
        </Typography>

        <Button sx={{ mt: 2, mx: 'auto', width: 350 }} onClick={signUp} type='submit' variant='contained' color='primary'> Sign Up</Button>
      </Paper>

      <Paper elevation={10} style={paperStyle} >
        <Typography varient='caption' align='center'> have an account? <Button variant='text' onClick={logIn}>Login</Button> </Typography>
      </Paper>
    </Grid>

  )
}

export default SignUp