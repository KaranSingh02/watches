import {React, useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import '../../css/login.css';
import {useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const Login = () => {
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [password2,setPassword2] = useState();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      if(password !== password2){
        alert("Passwords dont match");
      }
      else{
        const data = {
          'name': username,
          'email': email,
          'password': password
        }
        console.log(data);
        axios.post('/luxerange/signup', data)
        .then(function (response) {
          console.log("Status:- " + response.status);
          dispatch({type: 'REGISTER', payload: response});
        })
        .catch(function (error) {
          console.log(error);
        });
        }
      };

    const responseGoogle = (response) => {
      // console.log(response);
      // var res = response.profileObj;
      // debugger;
      // this.signup(response);
          };

    return (
      <div className='login_background'>
      <MDBContainer className='login_container'>
      <MDBRow className='login_row'>
        <MDBCol className='login_left_col' md="6">
          
        </MDBCol>
        <MDBCol md="6" className='login_right_col' >
          <form className='login_form' onSubmit={handleSubmit}>
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
              <Button className='login_button' variant="contained" type='submit'>Register</Button>
            </div><br/>
          </form>
          <p className='text-center login_or'>------------ or ------------</p>
          <div className='text-center'>
          <GoogleLogin 
            clientId="788786912619-k4tb19vgofvmn97q1vsti1u8fnf8j6pa.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle} >
          </GoogleLogin>
          </div><br />
          <p className='text-center login_heading2'>New to Luxerange? <a href='/login'>Login</a></p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    );
};

export default Login;