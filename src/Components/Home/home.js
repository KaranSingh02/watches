import React from "react";
import Leftmenu from "./leftmenu";
import Rightmenu from "./rightdata";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Home = () => {
    return(

    <MDBContainer >
        <MDBRow >
            <MDBCol className="leftmenu_home"  md="3">
                <Leftmenu />
            </MDBCol>
            <MDBCol>
                <Rightmenu />
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    );
}

export default Home;