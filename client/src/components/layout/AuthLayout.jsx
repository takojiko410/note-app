import { Box } from "@mui/material";
import {Container} from "@mui/system";
import React from 'react'
import { Outlet } from 'react-router'
import Logo from "../../assets/images/logo.png";

const AuthLayout = () => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box sx={{
          marginTop: 6,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}>
          <img src={Logo} alt="" 
            style={{width: 200, heigh: 200, marginBottom: -50, marginTop: -30}}
          />
        
        </Box>
        <Outlet/>
      </Container>
    </div>
  )
}

export default AuthLayout