import React from 'react';
import image from '../../assets/bckImage.jpg';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Login_SignUp() {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100vh',
      // transform: 'translate(-50%, -50%)'
      // filter: 'blur(8px)',
      // "-webkit-filter": 'blur(8px)'
    }} >
      <div>
        <Box sx={{
          display: 'flex',
          // transform: 'translate(-50%, -50%)',
          // top: '50%',
          // left: '50%',
          // zIndex: 2,
          // position: 'absolute',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '20%',
            height: '60vh',
          },
        }}>
          <Paper elevation={24} square>
            <div>
              Hi, this is Atul
              Login-SignUp
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  )
}
