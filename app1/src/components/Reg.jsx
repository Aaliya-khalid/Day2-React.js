import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Reg = () => {
  return (
    <div>
      
       <Typography variant="h1">Welcome</Typography>
      <TextField label="name" variant="outlined" />
      <br /><br />
      <TextField label="place" variant="outlined" />
      <br /><br />
      <TextField label="age" variant="outlined" />
      <br /><br />
      <TextField label="gender" variant="outlined" />
      <br /><br />
      <TextField label="username" variant="outlined" />
      <br /><br />
      <TextField label="password" variant="outlined" />
      <br /><br />
      <Button variant="contained">Register</Button>
      <br /><br />
    </div>
  )
}

export default Reg
