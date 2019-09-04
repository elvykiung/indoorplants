import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import AddButton from "../../components/AddButton/AddButton";
import "./style.css";
import leaf from "./leaf.png";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectTo: null
    };

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
                // redirect to myPlants page
                this.props.history.push('/myPlants');

            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })
  }



  render() {
    return (
      <div>
        <Card >
          <Image src="https://images.wallpaperscraft.com/image/leaves_plant_green_130446_3840x2400.jpg" alt="Home" />
          <Card.ImgOverlay style={{ marginTop: "5%" }}>
            <Card.Title id="title" className="text-white text-center" style={{ "font-size": "4vw", margin: "auto", fontWeight: "bold" }}>
            <Image src={leaf} />
            </Card.Title>
           
            <Form style={{ textAlign: "center", paddingTop: "10%" }}>
              <Form.Group >
                <Form.Control style={{ width: "50%", marginLeft: "25%" }} type="text" placeholder="Enter User Name" 
                               id="username"
                               name="username"
                               value={this.state.username}
                               onChange={this.handleChange}   
                />
                <Form.Text style={{ fontSize: "18px" }} className="text"></Form.Text>
              </Form.Group>

              <Form.Group >
                <Form.Control style={{ width: "50%", marginLeft: "25%" }} type="password" placeholder="Password" 
                         name="password"
                         value={this.state.password}
                         onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group >
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <AddButton style={{ backgroundColor: "transparent", paddingLeft: "10%", paddingRight: "10%" }} onClick={this.handleSubmit}
              type="submit">
                Sign in
          </AddButton>

            </Form>
          </Card.ImgOverlay>
        </Card>

      </div>
    );
  }
}

export default Login;
