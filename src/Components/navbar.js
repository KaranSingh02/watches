import {useSelector, useDispatch} from 'react-redux';
import {Nav} from 'react-bootstrap';
// import Logo from '../images/logo.png';
// import {GetUserProfile} from '../redux/actions/user';
import React, { useState, useEffect } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";
// import jwt from 'jsonwebtoken';

const Menu = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // var isLoggedIn = useSelector( state => state.userReducer.isLoggedIn);
    // decoding the token to get logged in user data
    // const dispatch = useDispatch();
    // const data = jwt.decode(localStorage.jwtToken);
    // const user_data = useSelector( (state) => state.UserProfile.curr_user_data);

  //   useEffect( () => {
  //     if(data){
  //     dispatch(GetUserProfile(data.id));
  //     }
  // },[]);

    // const handleLogout = (e) => {
    //     if(window.confirm('Are you sure you want to LogOut?')){
    //         localStorage.clear('jwtToken');
    //         window.location.href = '/login';
    //     }
    // }

    // const toggleCollapse = () => {
    //     setIsOpen(!isOpen);
    // }

    // console.log(user_data.instagram);

  return (
   
      <MDBNavbar color="special-color" dark expand="md">
        {/* <MDBNavbarBrand >
          <img  className="rounded float-left white-text" alt="aligment" />
        </MDBNavbarBrand> */}
        <MDBNavbarToggler  />
        <MDBCollapse id="navbarCollapse3"  navbar>
          <MDBNavbarNav left>
          {/* {isLoggedIn && <Nav.Link href="/home">Home</Nav.Link>} */}
          <MDBNavItem >
              <Nav.Link href="/home">Home</Nav.Link>
            </MDBNavItem>
            
          </MDBNavbarNav>

          {/* Right side Nav links */}
          <MDBNavbarNav right>

          {/* <MDBNavItem>
              <Nav.Link className="waves-effect waves-light" href="https://www.instagram.com/">
                <MDBIcon fab icon="instagram" />
              </Nav.Link>
            </MDBNavItem> 

            <MDBNavItem> 
              <Nav.Link className="waves-effect waves-light" href="https://www.facebook.com/">
                <MDBIcon fab icon="facebook" />
              </Nav.Link> 
            </MDBNavItem>  */}


          

          <MDBNavItem>            
            <Nav.Link className="waves-effect waves-light"  >
                <MDBIcon icon="user" />
              </Nav.Link>
            </MDBNavItem> 

            <MDBNavItem>   
                <Nav.Link className="waves-effect waves-light">         
                 <MDBIcon icon="sign-out-alt" />
                </Nav.Link>
            </MDBNavItem> 

            <MDBNavItem>
              <Nav.Link className="waves-effect waves-light" href="/login">
                  Login
              </Nav.Link> 
            </MDBNavItem> 

            <MDBNavItem>
              <Nav.Link className="waves-effect waves-light" href="/register">
                  Register
              </Nav.Link> 
            </MDBNavItem> 

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
}

export default Menu;

