import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Header() {
  return (
    <div>
        <Container fluid className="p-5 shadow">
            <Row>
                <div className='col-md-3'>Call Us <span className="bi bi-telephone"></span> (+91)9876543210</div>
                <div className='col-md-6'>
                    <input type="text" placeholder="Search here..." className='form-control'></input>
                </div>
                <div className='col-md-3'>
                    <span className="bi bi-facebook ms-5 fs-4"></span>
                    <span className="bi bi-twitter ms-2 fs-4"></span>
                    <span className="bi bi-whatsapp ms-2 fs-4"></span>
                    <span className="bi bi-youtube ms-2 fs-4"></span>
                </div>
            </Row>
        </Container>
    </div>
  )
}
