import {React, useEffect, useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import '../../css/login.css';
import Button from '@mui/material/Button';
import GoogleLogin from 'react-google-login';


const Login = () => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    const handleSubmit = () => {
      const data = {
        'username': username,
        'password': password
      }
    };

    const responseGoogle = (response) => {
      // console.log(response);
      // var res = response.profileObj;
      console.log("Hello");
      // debugger;
      // this.signup(response);
          }

    return (
      <div className='login_background'>
      <MDBContainer className='login_container'>
      <MDBRow className='login_row'>
        <MDBCol className='login_left_col' md="6">
          
        </MDBCol>
        <MDBCol className='login_right_col' md="6" >
          <form className='login_form'>
            <h4 className='text-center login_heading'>Luxerange</h4><br/><br/><br/><br/>
            <p className="h5 text-center mb-4 login_heading2">Welcome to Luxerange</p><br/><br/>
            <div className="grey-text login_form_div">
              <MDBInput
                label="Type your email or username"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={ (e) => setUsername(e.target.value)}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={ (e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button className='login_button' variant="contained">Login</Button>
            </div><br/><br/>
          </form>
          <p className='text-center login_or'>------------ or ------------</p><br />
          <div className='text-center'>
          <GoogleLogin 
            clientId="788786912619-k4tb19vgofvmn97q1vsti1u8fnf8j6pa.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle} >
          </GoogleLogin>
          </div><br />
          <p className='text-center login_heading2'>New to Luxerange? <a href='/register'>Register</a></p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    );
};

export default Login;