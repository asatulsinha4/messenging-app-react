import React from 'react';
import image from '../../assets/bckImage.jpg';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import useTitle from '../../components/globals/useTitle';

const useStyles = makeStyles({
  background: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0 , 0.5)), url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100vh',
    zIndex: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    display: 'block',
  },
  content: {
    position: 'fixed',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight: 1,
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)',
    // maxWidth: '50%',
    // maxHeight: '50%',
    padding: '20px 40px',
    opacity: 0.3
  },
})

export default function Login_SignUp() {
  const classes = useStyles();
  useTitle("SignUp");

  return (
    <div>
      <div className={classes.background}></div>
      <div className={classes.content}>
        <div style={{
          fontWeight: 'bold',
        }}>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 8,
              width: '20%',
              height: "82vh",
            },
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            '-webkit-backdrop-filter': 'blur(10px)',
            backdropFilter: 'blur(10px)',
          }}>
            {/* <Paper elevation={24} className={classes.box}>
              <div>
                Hi, this is Atul <br />
                Login-SignUp
              </div>
            </Paper> */}
            <div >
              Hi
            </div>
          </Box>
        </div>
      </div>
    </div>
  )
}
