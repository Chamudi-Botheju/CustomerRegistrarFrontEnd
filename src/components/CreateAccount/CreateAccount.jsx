import React from 'react'
import Logo2 from '../../assets/LogoPurple.png'
import Header2 from '../Header2/header2'
import FormComponent from '../FormComponent/PersonalFormComponent'
import { Box } from '@mui/material'

const CreateAccount = () => {
  return (
    <div>
      <Box>
      <Header2
          headercolor="#757AEF" 
          logoSrc={Logo2} 
          iconColor = "white"
        />
      </Box>
        <Box sx={{backgroundColor:'#757AEF', height:'100vh'}} >
        <FormComponent
      />
        </Box>
    </div>
  )
}

export default CreateAccount
