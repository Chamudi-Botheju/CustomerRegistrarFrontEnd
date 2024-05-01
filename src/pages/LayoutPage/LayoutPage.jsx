import { Box } from '@mui/material'
import React from 'react'
import Header2 from '../../components/Header2/header2'
import Logo2 from '../../assets/LogoPurple.png'
import SideNavigation from '../../components/SideNavigation/SideNavigation'
import { Outlet } from 'react-router-dom'
import HeaderInside from '../../components/HeaderInside/HeaderInside'

const LayoutPage = () => {
  return (
    <div>
        <Box>
        <HeaderInside
        headercolor="#757AEF" 
        logoSrc={Logo2} 
        iconColor = "white"
        />
        <SideNavigation/>
        <Outlet/>
        </Box>
      
    </div>
  )
}

export default LayoutPage
