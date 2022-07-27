import React from "react";
import WatchCard from './watches';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Rightmenu = () => {
    return(

        <MDBContainer >
            <MDBRow >
                <MDBCol   >
                    <WatchCard />
                </MDBCol>
                <MDBCol >
                    <WatchCard />
                </MDBCol>
                <MDBCol  >
                    <WatchCard />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        );
}

export default Rightmenu;