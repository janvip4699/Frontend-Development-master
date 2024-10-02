import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";

function App() {
  return 
    // <Container style={{ width: "400px" }}>
    //   <Row>
    //     <Col>
    //       <UserAuthContextProvider>
    //         <Router>
    //         <Routes>
    //           <Route
    //             path="/ManageProduct"
    //             element={
    //               <ProtectedRoute>
    //                 <ManageProduct />
    //               </ProtectedRoute>
    //             }
    //           />
    //           <Route path="/" element={<Login />} />
    //           <Route path="/register" element={<Register />} />
    //         </Routes>
    //         </Router>
    //       </UserAuthContextProvider>
    //     </Col>
    //   </Row>
    // </Container>
  <></>
}

export default App;
