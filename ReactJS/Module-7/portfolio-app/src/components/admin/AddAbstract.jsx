import React, {useState, useRef, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FlashMessage from 'react-flash-message';

export default function AddAbstract() {

  const [data, setData] = useState(false);

  const name = useRef("");
  const email = useRef("");
  const mobile = useRef("");
  const photo = useRef("");
  const address = useRef("");
  const objectives = useRef("");

  const Navigate = useNavigate();

  //for storing data
  const submitData=(e)=> {
    e.preventDefault();
    var ins = {
      name : name.current.value,
      email : email.current.value,
      mobile : mobile.current.value,
      photo : photo.current.value,
      address : address.current.value,
      objectives : objectives.current.value,
    }

    axios.post('http://localhost:4000/add-abstract', ins).then(()=>{
    
      setData(true);
      Navigate('/admin-login/add-abstract');

    })
  }

  //for displaying data
  useEffect(()=>{
    axios.get('http://localhost:4000/add-abstract').then((response)=>{
      setData(response.data);
    })
  },[data]);


  return (
    <div>
      <AdminHeader />
      <Container fluid className="m-0 p-0">
        <Row>
          <div className='col-md-3 bg-secondary'>
            <AdminSidebar />
          </div>
          <div className='col-md-8'>
            {/* Ad Portfolio here here */}

            <h4 className='text-dark mt-5'>&nbsp;Add your Objective</h4>
            {
                data && (<FlashMessage duration={5000} persistOnHover={true}>
                <div className="alert alert-success">Data submitted successfully !!</div>
                </FlashMessage>)
            }
            <form onSubmit={submitData}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input type="text" ref={name} className="form-control" id="exampleFormControlInput1" placeholder="Name" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email</label>
              <input type="text" ref={email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Mobile</label>
              <input type="text" ref={mobile} className="form-control" id="exampleFormControlInput1" placeholder="Phone *" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Photo</label>
              <input type="text" ref={photo} className="form-control" id="exampleFormControlInput1" placeholder="Photo" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Address</label>
              <textarea className='form-control' ref={address} id="exampleFormControlInput1" placeholder='Address'></textarea>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Enter Objectives</label>
              <textarea className="form-control" ref={objectives} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="mb-3">
              <input type="submit" className="btn btn-lg btn-dark bg-dark text-white" value="AddAbstract" id="exampleFormControlInput1" />

              <input type="reset" className="btn btn-lg bg-danger text-white ms-4" value="Reset" id="exampleFormControlInput1" />

            </div>
            </form>
            <table className='table border-1 p-5'>
              <thead>
                <tr className='text-center'>
                  <th>#id</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>Objectives</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((item)=>{
                      return(
                        <>
                          <tr className='text-center'>
                            <th>{item.id}</th>
                            <td><img src={item.photo} className='w-100'></img></td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.address}</td>
                            <td>{item.objectives}</td>
                            <td><i className="bi bi-trash-fill p-1 text-danger"></i>
                                <i className="bi bi-pencil-fill p-1 text-primary"></i>
                            </td>
                          </tr> 
                        </>
                      )
                  })}
              </tbody>
            </table>
          </div>
        </Row>

      </Container>
      <AdminFooter />
    </div>
  )
}
