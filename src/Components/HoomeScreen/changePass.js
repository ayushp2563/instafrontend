import React from 'react'
import { Grid, Paper, TextField, Button } from '@mui/material'
 export default function ChngPass() {

  const paperStyle = {
    padding: "25px 20px ",
    width: 400,
    margin: "25px auto",
    align: 'center'
  }

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>   
        <form>
          <TextField  sx={{ mb: 2 }} name="old password" id="email" fullWidth label='Old Password' />
          <TextField  sx={{ mb: 2 }} name="password" id="password" fullWidth label='Password' />
          <TextField sx={{ mb: 2 }} name="cpassword" id="cpassword" fullWidth label=' Confirm Password' />
        </form>
        <Button sx={{ mt: 2, mx: 'auto', width: 350 }}  type='submit' variant='contained' color='primary'> Submit</Button>
      </Paper>
    </Grid>
  )
}

