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
        .post('/api/user/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {
                // update App.js state
                // this.props.updateUser({
                //     loggedIn: true,
                //     username: response.data.username
                // })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/myPlants',
                })

            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })
  }


    render() {
      if (this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
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
            <Form.Control type="text" placeholder="Enter User Name"
                          id="username"
                          name="username"
                          value={this.state.username}
                          onChange={this.handleChange}            
             />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" 
                     placeholder="Password" 
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
            <Button variant="primary" 
              onClick={this.handleSubmit}
              type="submit">
              Login
            </Button>
        </Form>
        </div>
      );
    }
  }
}

export default LogIn;
