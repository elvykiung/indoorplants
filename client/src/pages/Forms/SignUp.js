import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import AddButton from "../../components/AddButton/AddButton";
import "./style.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <Card >
          <Image src="https://images.wallpaperscraft.com/image/leaves_plant_green_130446_3840x2400.jpg" alt="Home" />
          <Card.ImgOverlay style={{ marginTop: "5%" }}>
          <Card.Title className="text-white text-center" style={{ "font-size": "4vw", margin: "auto", fontWeight: "bold" }}>
              Welcome
            </Card.Title>
            <Form style={{ textAlign: "center", paddingTop: "10%" }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="Email" placeholder="Email" style={{ width: "50%", marginLeft: "25%", backgroundColor: "transparent"}}/>
                <Form.Text style={{ fontSize: "18px" }} className="text">
                  We'll never share your email with anyone else.
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control style={{ width: "50%", marginLeft: "25%",backgroundColor: "transparent" }} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <AddButton variant="primary" type="submit" style={{ backgroundColor: "transparent", paddingLeft: "10%", paddingRight: "10%" }}>
                Sign Up
  </AddButton>
            </Form>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Login;