import React from 'react'
import LogoSider from '../../components/LogoSider/LogoSider';

import { Box, Typography } from '@mui/material';
import LoginComponent from '../../components/LoginComponent/LoginComponent';

const LoginPage = () => {
  return (
    <Box sx={{
        Width:"100%",
        display:"flex",
        flexDirection:"row",
    
    }} >
       
            <Box sx={{width:"50%"}}>
       <LogoSider/>
            </Box>
       
            <Box sx={{width:"50%"}}>
          <LoginComponent/>
            </Box>
    </Box>
  )
}

export default LoginPage
