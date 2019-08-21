// Features
//   category list item Component
// - Title : Easy to growth, Decorative, Rare Plants
// - Pics
// - Button to call list item page component
//   Sticky bottom navbar component
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";

class DiscoveryMain extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Jumbotron fluid className="text-center">
          <h1 className="text-primary">Discovery Your Plants</h1>
        </Jumbotron>
        <Card as="a" href="/easy-to-grow" style={{ margin: "auto" }}>
          <Card.Img src="https://3c9sm1yzqy518hwx3f6o4c64-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Succulent-1--1030x381.jpg" alt="Easy to growth Plants" />
          <Card.ImgOverlay>
            <Card.Title className="text-white text-center" style={{ "font-size": "4vw", margin: "10%", fontWeight: "bold" }}>
              Easy to growth Plants
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
        <br />
        <Card as="a" href="/decorative" style={{ margin: "auto" }}>
          <Card.Img src="https://s3-us-west-1.amazonaws.com/landgbucket/images/products/6c0f98f2-5af2-44ab-9f97-ec7fc693b8a0.jpeg?1566068123.70990019800" alt="Decorative Plants" />
          <Card.ImgOverlay>
            <Card.Title className="text-danger text-center" style={{ "font-size": "5vw", margin: "20%", fontWeight: "bold" }}>
              Decorative Plants
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
        <br />
        <Card as="a" href="/rare" style={{ margin: "auto" }}>
          <Card.Img src="https://i.pinimg.com/originals/71/6a/39/716a39edf1b3de80260b943982628c49.jpg" alt="Rare Plants" />
          <Card.ImgOverlay>
            <Card.Title className="text-info text-center" style={{ "font-size": "5vw", margin: "20%", fontWeight: "bold" }}>
              Rare Plants
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Container>
    );
  }
}

export default DiscoveryMain;
