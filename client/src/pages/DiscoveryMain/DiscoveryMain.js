import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "./style.css"

class DiscoveryMain extends Component {
  state = {};
  render() {
    return (
      <Card>
         <Image src="https://images.wallpaperscraft.com/image/white_rose_petals_flower_bright_68307_1600x1200.jpg" alt="Search" />
         <Card.ImgOverlay style={{ marginTop: "5%" }}>
      <Container>
      <div id="container">
        <Jumbotron style={{backgroundColor:"transparent"}} fluid className="text-center">
          <h1 className="text-primary">Discover Your Plants</h1>
        </Jumbotron>
        </div>
        <Card as={Link} to="/easy-to-grow" style={{ margin: "auto", maxWidth: "100%" }}>
          <Card.Img src="https://images.wallpaperscraft.com/image/cactus_plant_spiny_139104_3840x2400.jpg" alt="Easy to growth Plants" style={{ height: "500px" }} />
          <Card.ImgOverlay>
            <Card.Title className="text-white text-center" style={{ fontSize: "4vw", marginTop: "20%", fontWeight: "bold" }}>
              Easy to growth Plants
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
        <br />
        <Card as={Link} to="/decorative" style={{ margin: "auto", maxWidth: "100%" }}>
          <Card.Img src="https://images.wallpaperscraft.com/image/plant_palms_leaves_bushes_116060_3840x2400.jpg" alt="Decorative Plants" style={{ height: "500px" }} />
          <Card.ImgOverlay>
            <Card.Title className="text-danger text-center" style={{ fontSize: "5vw", margin: "10%", fontWeight: "bold", maxHeight: "20%", textAlign: "center" }}>
              Decorative Plants
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
        <br />
        <Card as={Link} to="/rare" style={{ margin: "auto", maxWidth: "100%", marginBottom: "10%" }}>
          <Card.Img src="https://images.wallpaperscraft.com/image/plant_vase_flowers_decoration_114234_3840x2400.jpg" alt="Rare Plants" style={{ height: "500px" }} />
          <Card.ImgOverlay>
            <Card.Title className="text-white text-center" style={{ fontSize: "5vw", margin: "10%", fontWeight: "bold" }}>
              Rare Plants
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Container>
      </Card.ImgOverlay>
      </Card>
    );
  }
}

export default DiscoveryMain;
