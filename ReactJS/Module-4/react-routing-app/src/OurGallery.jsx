import React from "react";
import {Container} from "react-bootstrap"
import gal1 from './assets/images/gal1.jpg'
import gal2 from './assets/images/gal2.jpg'
function OurGallery()
{
    return(
        <>
            <Container className="p-5 mt-5">
                <h1>This is Our Gallery Page</h1>
                <hr className="w-100"></hr>
                <img src={gal1} alt="404" style={{width:"500px", height:"280px"}} />
                <img src={gal2} alt="404" style={{width:"500px", height:"280px"}} />
            </Container>
        </>
    )
}
export default OurGallery