import React from 'react'
import { Grid, Paper, TextField, Button, Typography } from '@mui/material'
import { useState } from 'react';
export default function ChnProfile() {

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

  return (
    <Grid> 
      <Paper elevation={20} style={paperStyle}>
        <form>
        <TextField value={firstname} onChange={(e) => setFirstname(e.target.value)} sx={{ mb: 2 }} name="firstname" id="firstname" fullWidth label='First Name' />
          <TextField value={lastname} onChange={(e) => setLastname(e.target.value)} sx={{ mb: 2 }} name="lastname" id="lastname" fullWidth label='Last Name' />
          <Typography marginBottom="20px" varient='caption' >Help people discover your account by using the name you're known by: either your full name, nickname, or business name.  </Typography>
          <Typography marginBottom="20px" varient='caption' >You can only change your name twice within 14 days.  </Typography>


          <TextField value={username} onChange={(e) => setUsername(e.target.value)} sx={{ mb: 2 }} name="username" id="username" fullWidth label='Username' />
          <Typography marginBottom="20px" varient='caption' >In most cases, you'll be able to change your username back to  for another 14 days.  </Typography>

           <TextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 2 }} name="email" id="email" fullWidth label='Email' />
          <TextField value={mobileno} onChange={(e) => setMobileno(e.target.value)} sx={{ mb: 2 }} name="mobileno" id="mobileno" fullWidth label='Mobile Number' />
         
        </form>

        <Button sx={{ mt: 2, mx: 'auto', width: 350 }}  type='submit' variant='contained' color='primary'> submit</Button>
      </Paper>
    </Grid>
  )
}

