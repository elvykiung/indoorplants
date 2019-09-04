import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import AddButton from "../../components/AddButton/AddButton";
import "./style.css";
import leaf from "./leaf.png";
import axios from 'axios';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      confirmPassword: ''
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
    axios.post('/api/user/', {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    })
      .then(response => {
        console.log(response)
        if (!response.data.errmsg) {
          console.log('successful signup')
          this.props.history.push('/login');
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
        <Card >
          <Image src="https://images.wallpaperscraft.com/image/leaves_plant_green_130446_3840x2400.jpg" alt="Home" />
          <Card.ImgOverlay style={{ marginTop: "5%" }}>
            <Card.Title className="text-white text-center" style={{ "font-size": "4vw", margin: "auto", fontWeight: "bold" }}>
              <Image src={leaf} />
            </Card.Title>

            <Form style={{ textAlign: "center", paddingTop: "10%" }}>
<<<<<<< HEAD
              <Form.Group controlId="formBasicEmail">
                <Form.Control style={{ width: "50%", marginLeft: "25%" }} type="email" placeholder="User name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control type="Email" placeholder="Email" style={{ width: "50%", marginLeft: "25%", backgroundColor: "transparent" }} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control style={{ width: "50%", marginLeft: "25%", backgroundColor: "transparent" }} type="password" placeholder="Password" />
=======
            <Form.Group >
                <Form.Control type="text" placeholder="User Name" style={{ width: "50%", marginLeft: "25%", backgroundColor: "transparent"}}
                                           id="username"
                                           name="username"
                                           value={this.state.username}
                                           onChange={this.handleChange} 
                              />
                <Form.Text style={{ fontSize: "18px" }} className="text">
              </Form.Text>
              </Form.Group>

              <Form.Group >
                <Form.Control type="Email" placeholder="Email" style={{ width: "50%", marginLeft: "25%", backgroundColor: "transparent"}}
                         id="email"
                         name="email"
                         value={this.state.email}
                         onChange={this.handleChange}
                />
                <Form.Text style={{ fontSize: "18px" }} className="text">
                  We'll never share your email with anyone else.
              </Form.Text>
              </Form.Group>

              <Form.Group >
                <Form.Control style={{ width: "50%", marginLeft: "25%",backgroundColor: "transparent"}} type="password" placeholder="Password" 
                   name="password"
                   value={this.state.password}
                   onChange={this.handleChange}                />
>>>>>>> master
              </Form.Group>

              <Form.Text style={{ fontSize: "18px", paddingBottom: "10px" }} className="text">We'll never share your personal information with anyone else.</Form.Text>
              <Form.Group controlId="formBasicChecbox">
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
              </Form.Group>
              <AddButton variant="primary" type="submit" style={{ backgroundColor: "transparent", paddingLeft: "10%", paddingRight: "10%" }} onClick={this.handleSubmit}>
                Sign Up
            </AddButton>
            </Form>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default SignUp;