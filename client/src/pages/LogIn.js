import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import API from "../utils/API";
import auth from '../auth';
import axios from 'axios';
import { Redirect } from 'react-router-dom';



class LogIn extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        email:'',
        password: '',
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
    event.preventDefault()
    console.log('handleSubmit')

    axios
        .post('/user/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/'
                })
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })
  }


    // for fake authentication
    // login = () => {
    //   auth.login(() => {
    //     this.props.history.push('/myPlants');
    //   });
    // };

    render() {
      if (this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          {/* <button onClick={this.login}>Log in</button> */}

          <button
            onClick={() => {
              auth.login(() => {
                this.props.history.push('/myPlants');
              });
            }}
          >
            Login
          </button>
          <Form>
            <Form.Group >
            <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter User Name" />
              <Form.Text className="form-input"
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
              <Form.Text className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.handleChange}>
              </Form.Text>
            </Form.Group>


            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="form-input"
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
              Log In
            </Button>
          </Form>
        </div>
      );
    }
  }
}

export default LogIn;
