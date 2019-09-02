import React, { Component } from "react";
// import Form from "react-bootstrap/Form";
// import API from "../utils/API";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import AddButton from "../components/AddButton/AddButton";


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

        {/* <Container>
          <Row>
            <Col xs={6} md={4}>
              <Col xs={6} md={4} >
                <Image dpr="auto" responsive width="1500%" height="20%" src="https://images.wallpaperscraft.com/image/leaves_plant_green_130446_3840x2400.jpg" />
              </Col>
            </Col>
          </Row>
        </Container> */}
        <Card >
            <Image src="https://images.wallpaperscraft.com/image/leaves_plant_green_130446_3840x2400.jpg" alt="Home" />
            
          <Card.ImgOverlay style={{marginTop:"5%"}}>
         
            <Card.Title src="../leaf.png" className="text-white text-center" style={{ "font-size": "4vw", margin: "auto", fontWeight: "bold"}}>
              Home page
            </Card.Title>
            <div style={{marginTop:"10%"}}>
          <AddButton as="a" href="/login" variant="primary" type="submit" style={{ marginLeft: "36%", paddingLeft: "10%", paddingRight: "11%", backgroundColor:"transparent" }}>
            Sign In
         </AddButton>
          <br />
          <AddButton as="a" href="/signup" variant="primary" type="submit" style={{ marginLeft: "36%", paddingLeft: "10%", paddingRight: "10%", backgroundColor:"transparent" }}>
            Sign Up
         </AddButton>
        </div>
          </Card.ImgOverlay>
        </Card>
       
      </div>
    );
  }
}

export default Login;