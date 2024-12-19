import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

function Signup() {
  return (
    <div className="container-fluid">
      <Row className='bama1'>
        <Col sm={6} className="signup-right">
          <h3>Sign Up</h3>
          <form>
            <input type="text" placeholder="Enter full name" className="form-control" />
            <br />
            <input type="email" placeholder="Enter email" className="form-control" />
            <br />
            <input type="password" placeholder="Create password" className="form-control" />
            <br />
          </form>
          <Link to="/dashboard">
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </Link>
          <p>
            Already have an account? <Link to="/react">Login</Link>
          </p>
        </Col>
        {/* Left Side - Animated Image */}
        <Col sm={6} className="signup-left">
          <h1>“Capture moments that matter.”</h1>
          <p>“Photography is the story I fail to put into words.”</p>
        </Col>
      </Row>
    </div>
  );
}

export default Signup; 
