import React from 'react';
import LogoSider from '../../components/LogoSider/LogoSider';

import { Box } from '@mui/material';
import LoginComponent from '../../components/LoginComponent/LoginComponent';

const LoginPage = () => {
  return (
    <Box sx={{
        Width:"100%",
        display:"flex",
        flexDirection:"row",
    
    }} >
       
            <Box >
       <LogoSider/>
            </Box>
       
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
          <LoginComponent/>
            </Box>
    </Box>
  )
}

export default LoginPage
