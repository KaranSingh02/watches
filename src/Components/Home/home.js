import React from "react";
import WatchCard from './watches';
import Leftmenu from "./leftmenu";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Home = () => {
    return(

    <MDBContainer >
        <MDBRow >
            <MDBCol className="leftmenu_home"  md="3">
                <Leftmenu />
            </MDBCol>
            <MDBCol  md="3" >
                <WatchCard />
            </MDBCol>
            <MDBCol  md="3" >
                <WatchCard />
            </MDBCol>
            <MDBCol  md="3" >
                <WatchCard />
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    );
}

export default Home;