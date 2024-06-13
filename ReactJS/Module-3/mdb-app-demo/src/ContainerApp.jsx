import React from "react";
import {MDBContainer, MDBRow, MDBCard, MDBCardHeader, MDBCardBody, MDBBtn} from 'mdb-react-ui-kit';
export default function ContainerApp(){
    return(
        <>
            <MDBContainer className="p-5 mt-5 shadow">
                <h3 className="text-primary">MDB Container</h3>
                <hr className="w-25 border border-dark border-2"></hr>
                <MDBRow>
                    <div className="col-md-4 mt-3">
                        <MDBBtn className="btn btn-lg btn-primary text-white">Register Here</MDBBtn>
                    </div>
                    <div className="col-md-4 mt-3">
                        <MDBBtn className="btn btn-lg btn-danger text-white">Register Here</MDBBtn>
                    </div>
                    <div className="col-md-4 mt-3">
                        <MDBBtn className="btn btn-lg btn-dark text-white">Register Here <span className="fa fa-users"></span></MDBBtn>
                    </div>
                </MDBRow>
            </MDBContainer>
            <MDBContainer fluid className='bg-info p-3 mt-4'>
<MDBRow>
<div className='col-md-3 bg-dark p-4 ms-5'></div>
<div className='col-md-3 bg-warning ms-5 p-4'></div>
<div className='col-md-3 bg-secondary ms-5 p-4'></div>


<div className='col-md-7 mt-4 ms-4'>
<MDBCard>
<MDBCardHeader className='bg-danger text-white'>Our teams</MDBCardHeader>
<MDBCardBody className='p-4'>

  <button type='button' className='btn btn-md btn-danger'>Notifications <span className='fa fa-bell'><span className='badge badge-sm bg-white text-dark'>10</span></span></button>

</MDBCardBody>
</MDBCard>
</div>

<div className='col-md-4 mt-4 ms-5'>
<MDBCard>
<MDBCardHeader className='bg-warning text-white'>Our teams</MDBCardHeader>
<MDBCardBody className='p-4'>
<button type='button' className='btn btn-md btn-danger'>ViewCart <span className='fa fa-shopping-cart'><span className='badge badge-sm bg-white text-dark'>10</span></span></button>
</MDBCardBody>
</MDBCard>
</div>

</MDBRow>
</MDBContainer>
        </>
    )
}