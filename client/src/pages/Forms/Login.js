import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import auth from '../../auth';
import Card from "react-bootstrap/Card";
import AddButton from "../../components/AddButton/AddButton";
import "./style.css";
import leaf from "./leaf.png";


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
        <Card >
          <Image src="https://images.wallpaperscraft.com/image/leaves_plant_green_130446_3840x2400.jpg" alt="Home" />
          <Card.ImgOverlay style={{ marginTop: "5%" }}>
            <Card.Title id="title" className="text-white text-center" style={{ "font-size": "4vw", margin: "auto", fontWeight: "bold" }}>
            <Image src={leaf} />
            </Card.Title>
           
            <Form style={{ textAlign: "center", paddingTop: "10%" }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control style={{ width: "50%", marginLeft: "25%" }} type="email" placeholder="Enter email" />
                <Form.Text style={{ fontSize: "18px" }} className="text">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control style={{ width: "50%", marginLeft: "25%" }} type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <AddButton style={{ backgroundColor: "transparent", paddingLeft: "10%", paddingRight: "10%" }} onClick={() => {
                auth.login(() => {
                  this.props.history.push('/myPlants');
                });
              }}
                variant="primary" type="submit">
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
