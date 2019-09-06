import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import API from "../../utils/API";
import ListItems from "../../components/ListItems";
import "./style.css";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";


class Plants extends Component {
  state = {
    plants: []
  };

  componentDidMount() {
    this.getPlants();
  }

  getPlants = () => {
    API.getPlants(this.props.category)
      .then(res =>
        this.setState({
          plants: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Card>
      <Image src="https://images.wallpaperscraft.com/image/white_rose_petals_flower_bright_68307_1600x1200.jpg" alt="Search" />
      <Card.ImgOverlay style={{ marginTop: "5%" }}>
      <Container>
          <div id="container" >
        <Jumbotron style={{backgroundColor:"transparent"}} fluid className="text-center">
          <h1 className="text-primary">Discover New Plants!</h1>
        </Jumbotron>
        </div>
        <Row>
          <Col size="md-12">
            <div>
              {this.state.plants.length ? (
                <Container style={{ marginBottom: "5%" }}>
                  {this.state.plants.map(plant => {
                    if (plant.category && plant.category[0] === "rare") {
                      return <ListItems key={plant._id} images={plant.image} commonName={plant.commonName} scientificName={plant.scientificName} description={plant.fullDescription} title={plant.title} id={plant._id} />;
                    } else {
                      return <ListItems key={plant._id} images={"http://www.costafarms.com/CostaFarms/" + plant.image} commonName={plant.commonName} scientificName={plant.scientificName} description={plant.fullDescription} title={plant.title} id={plant._id} />;
                    }
                  })}
                </Container>
              ) : (
                <h2 className="text-center">No Plants Match Your Criteria</h2>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      </Card.ImgOverlay>
      </Card>
    );
  }
}

export default Plants;
