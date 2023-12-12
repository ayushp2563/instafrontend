import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import { pink } from '@mui/material/colors';
import meta from '../Components/images/metaicon.png'
import '../App.css'


const SplashScreen = () => {

  let my_url = "/login"
  setTimeout(function () {
    window.location.replace(my_url)
  }, 300);

  return (
    <div>
      <center style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        verticalAlign: 'middle',
        marginLeft: '-45px',

      }}>
        <InstagramIcon sx={{
          fontSize: 100, color: pink[500]
        }} />
      </center>
      <br />
      <p style={{ position: 'absolute', marginLeft: '-40px', bottom: '0', left: '0', width: '100%', textAlign: 'center' }}>from </p>
      <br />
      <img style={{ position: 'absolute', marginLeft: '-19px', bottom: '0px', left: '50%', height: '50px', width: '100px', justifyContent: 'center' }} className='meta_icon' src={meta} alt='#' />

    </div>
  )
}

export default SplashScreen