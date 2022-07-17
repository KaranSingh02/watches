import {React, useEffect, useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import '../../css/login.css';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [password2,setPassword2] = useState();

    const handleSubmit = () => {
      if(password != password2){
        alert("Passwords dont match");
      }
      else{
        const data = {
          'username': username,
          'email': email,
          'password': password
        }
      }
    }

    return (
      <div className='login_background'>
      <MDBContainer>
      <MDBRow className='login_row'>
        <MDBCol className='login_left_col' md="6">
          
        </MDBCol>
        <MDBCol md="6" className='login_right_col' >
          <form className='login_form'>
            <h4 className='text-center login_heading'>Luxerange</h4><br/><br/>
            <p className="h5 text-center mb-4 login_heading2">Welcome to Luxerange</p><br/>
            <div className="grey-text login_form_div">
            <MDBInput
                label="Type your username"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={ (e) => setUsername(e.target.value)}
              />
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={ (e) => setEmail(e.target.value)}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={ (e) => setPassword(e.target.value)}
              />
              <MDBInput
                label="Re-type your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={ (e) => setPassword2(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button className='login_button' variant="contained">Register</Button>
            </div><br/>
          </form>
          <p className='text-center login_or'>------------ or ------------</p>
          <p className='text-center google_action'><GoogleIcon />&nbsp; Sign In With Google</p>
          <p className='text-center login_heading2'>New to Luxerange? <a href='/login'>Login</a></p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    );
};

export default Login;