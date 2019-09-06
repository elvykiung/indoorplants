import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import AddButton from "../../components/AddButton/AddButton";
import leaf from "./leaf.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
        <Card>
        <Image src="https://images.wallpaperscraft.com/image/leaves_plant_green_130446_3840x2400.jpg" alt="Home" />

          <Card.ImgOverlay style={{ marginTop: "5%" }}>
            <Card.Title src="../leaf.png" className="text-white text-center" style={{ fontSize: "4vw", margin: "auto", fontWeight: "bold" }}>
            <Image src={leaf} />
            </Card.Title>
            <div style={{ marginTop: "2%" }}>
              <AddButton as="a" href="/login" variant="primary" type="submit" style={{ marginLeft: "36%", paddingLeft: "10%", paddingRight: "11%", backgroundColor: "transparent" }}>
                Sign In
              </AddButton>
              <br />
              <AddButton as="a" href="/signup" variant="primary" type="submit" style={{ marginLeft: "36%", paddingLeft: "10%", paddingRight: "10%", backgroundColor: "transparent" }}>
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
