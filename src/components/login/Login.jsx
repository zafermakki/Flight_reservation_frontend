import React from 'react';
import { Button, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { useNavigate } from "react-router-dom"
import "./login.css";

const Login = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="get-start-container">
        <div className="content">
          <div>
            <h2 className='text-login'>Login</h2>
          </div>
          <div>
            <div className='input-login'>
              <TextField
                label="Username"
                type="text"
                className='input-user'
                sx={{ margin: "15px" }}
              />
              <br />
              <TextField
                label="Password"
                type="password"
                className='input-password'
                sx={{ margin: "15px" }}
              />
              <br />
              <Button 
                variant='contained'
                className='btn-login'
                sx={{
                  backgroundColor: "#7b1fa2",
                  color: "#fff"
                }}
              >
                Login <LoginIcon />
              </Button>
              <p style={{ fontSize: "20px" }}>
                If you don't have an account<br />
                click the button in bottom
              </p>
              <Button 
                variant='contained'
                className='btn-create-account1'
                sx={{
                  backgroundColor: "#7b1fa2",
                  color: "#fff"
                }}
                onClick={() => navigate('/createaccount')}
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
