import React,{useRef} from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

function ContactForm()
{
    const SERVICEID="service_tym2r7n";
    const TEMPLATEID="template_vijxhld";
    const PUBLICKEY="4ZRXt4SlUOofP0NTM";
    // stored data using useref
    const firstname = useRef("");
    const lastname = useRef("");
    const email = useRef("");
    const message = useRef("");

    // form handler function
    const addContactData=(e)=>{
        e.preventDefault();
        var ins = {
            firstname : firstname.current.value,
            lastname : lastname.current.value,
            email : email.current.value,
            message: message.current.value
        }

        // call api to store data inside of db.json 
        //email send methods
        emailjs.sendForm(SERVICEID, TEMPLATEID, e.target, PUBLICKEY);
        axios.post("http://localhost:4000/manage-contacts",ins).then(()=>{
            Swal.fire({
                title: "success",
                text: "Thanks for contact with us one of our admin will contact with you soon",
                icon: "success"
                });
        })
        e.target.reset();
    }

    return(
        <>  
            <Form className="bg-light text-dark p-5 shadow border" onSubmit={addContactData}>
                <div className="row">
                    <Form.Group className="mb-3 col-lg-6" controlId="firstName">
                        <Form.Label className="w-100 text-start text-capitalize">First name</Form.Label>
                        <Form.Control type="text" ref={firstname} name="name"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="lastName">
                        <Form.Label className="w-100 text-start text-capitalize">Last name</Form.Label>
                        <Form.Control type="text" ref={lastname}></Form.Control>
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="w-100 text-start text-capitalize">Email Address</Form.Label>
                        <Form.Control type="email" ref={email} name="email"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="textarea">
                        <Form.Label className="w-100 text-start text-capitalize">Message</Form.Label>
                        <Form.Control type="textarea" rows={3} ref={message} name="message"></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    )
}
export default ContactForm