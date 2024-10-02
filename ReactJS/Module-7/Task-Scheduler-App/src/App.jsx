import React from 'react'
import {Container, Row} from "react-bootstrap"
import AddTask from './AddTask'

function App() {

  return (
    <>
      <div>
        <Container fluid className="w-100 bg-primary p-4">
          <h1 className="text-white text-center">Task Scheduler App</h1>
        </Container>
        <Container fluid className="border shadow w-75 mx-auto mt-5">
          <Row>
            <div className='col-md-3 mt-5'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BtLhkORsgCvCDFhKq9ZQ0ICDjaxJAntxfA&s"></img>
            </div>
            <AddTask/>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default App
