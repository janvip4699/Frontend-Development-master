import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function ContactForm()
{
    return(
        <>  
            <Form className="bg-light text-dark p-5 shadow border">
                <div className="row">
                    <Form.Group className="mb-3 col-lg-6" controlId="firstName">
                        <Form.Label className="w-100 text-start text-capitalize">First name</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="lastName">
                        <Form.Label className="w-100 text-start text-capitalize">Last name</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="w-100 text-start text-capitalize">Email Address</Form.Label>
                        <Form.Control type="email"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="textarea">
                        <Form.Label className="w-100 text-start text-capitalize">Message</Form.Label>
                        <Form.Control type="textarea" rows={3}></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    )
}
export default ContactForm