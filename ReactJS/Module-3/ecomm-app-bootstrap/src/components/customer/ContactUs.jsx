import React from "react";
import {Container} from "react-bootstrap"
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
function ContactUs()
{
    return(
        <>
        <Header/>
        <Navbar/>
        <Container className="p-5 mt-5">
        <h1>Contact Us</h1>
        <hr></hr>
        <h4>Flipkart Help Center | 24x7 Customer Care Support</h4>
        <p>The Flipkart Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Flipkart Help Centre also lists out more information that you may need regarding Flipkart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Flipkart Help Centre number or even access Flipkart Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on 19-Jun-24</p>
        </Container>
        <Footer/>
        </>
    )
}
export default ContactUs