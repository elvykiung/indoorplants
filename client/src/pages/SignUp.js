import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

// import API from "../utils/API";

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      confirmPassword: '',
      redirectTo: null

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    console.log('sign-up handleSubmit, username: ')
    console.log(this.state.username)
    event.preventDefault()

    //request to server to add a new username/password
    axios.post('/user/', {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    })
      .then(response => {
        console.log(response)
        if (!response.data.errmsg) {
          console.log('successful signup')
          this.setState({ //redirect to login page
            redirectTo: '/login'
          })
        } else {
          console.log('username already taken')
        }
      }).catch(error => {
        console.log('signup error: ')
        console.log(error)

      })
  }



  render() {
      return (
        <div>
        <Form>
          <Form.Group >
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter User Name" />
            <Form.Text className="text-muted"
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleChange}>
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.handleChange}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>


          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted"
                      placeholder="password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}>
            </Form.Text>
          </Form.Group>
            <Button variant="primary" 
              onClick={this.handleSubmit}
              type="submit">
              Sign Up
            </Button>
        </Form>
        </div>
      );
    }
}

export default SignUp;