import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import API from "../utils/API";
import auth from '../auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  // for fake authentication
  // login = () => {
  //   auth.login(() => {
  //     this.props.history.push('/myPlants');
  //   });
  // };

  render() {
    return (
      <div>
        {/* <button onClick={this.login}>Log in</button> */}
        <Form style={{textAlign:"center", paddingTop:"10%"}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{fontSize:"25px"}}>Email address</Form.Label>
            <Form.Control style={{width:"50%", marginLeft:"25%"}} type="email" placeholder="Enter email" />
            <Form.Text style={{fontSize:"18px"}} className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontSize:"25px"}}>Password</Form.Label>
            <Form.Control style={{width:"50%", marginLeft:"25%"}} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button  onClick={() => {
            auth.login(() => {
              this.props.history.push('/myPlants');
            });
          }}
          variant="primary" type="submit">
            Log In
          </Button>
          
        </Form>
      </div>
    );
  }
}

export default Login;