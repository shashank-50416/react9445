import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';


function Login() {
  return (
    <div className="container-fluid ">
      <Row className="mama">
        {/* Left Side - Image */}
        <Col sm={6} className="mama2">
          <h1 >“I don't trust words. ...</h1>
          <p>“Photography takes an instant out of time, altering life by holding it still.”...</p>
          </Col>
        <Col sm={6} className="mama3">
        <h3>Login</h3> 
          <form action="">
            <input type="text" placeholder='Enter user name' className='form-control text-center' /><br />
            <input type="password" placeholder='Enter password' className='form-control text-center' /><br />
          </form>
          <Link to="/">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </Link>
          <p>Don't have an account?<Link to="/signup">Signup</Link></p>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
