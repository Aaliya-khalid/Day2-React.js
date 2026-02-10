import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div>
      <input type="text" placeholder='Username' />
      <br /><br />
      <input type="Password" placeholder='Password'/>
      <br /><br />
      <button>Login</button>
      <br /><br /><br /><br />
       <Typography variant="h1" gutterBottom>
       Login
      </Typography>
      <TextField label="Username" variant="outlined" />
      <br /><br />
      <TextField label="Username" variant="filled" />
      <br /><br />
      <TextField label="Username" variant="standard" />
      <br /><br />
      <Button variant="text">Login</Button>
      <br /><br />
      <Button variant="contained">Login</Button>
      <br /><br />
      <Button variant="outlined">Login</Button>
      <br /><br />
      
    </div>
  )
}

export default Login
