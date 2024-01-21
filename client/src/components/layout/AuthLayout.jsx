import { Box } from "@mui/material";
import {Container} from "@mui/system";
import React from 'react'
import {useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Logo from "../../assets/images/logo.png";
import authUtils from "../../utils/authUtils";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //JWTを持っているのか確認する
    const checkAuth = async () => {
      //認証チェック
      const isAuth = await authUtils.isAuthenticated();
      if(isAuth) {
        navigate("/");
      }
    }
    checkAuth();
  }, [navigate]);

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