import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import API from "../utils/API";

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }


render() {
    return (
      <div>
       <Form style={{textAlign:"center", paddingTop:"10%"}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{fontSize:"25px"}}>Email address</Form.Label>
    <Form.Control style={{width:"50%", marginLeft:"25%"}} type="email" placeholder="Enter email" />
    <Form.Text style={{fontSize:"18px"}} className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label style={{fontSize:"25px"}}>Password</Form.Label>
    <Form.Control style={{width:"50%", marginLeft:"25%"}} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Sign Up
  </Button>
</Form>
      </div>
    );
  }
}

export default Login;