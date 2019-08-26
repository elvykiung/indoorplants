// Feature
//   map logic to pass data from database
//   sticky top component get the title name from discover main
//   list item component
//   Sticky bottom navbar component

import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import API from "../utils/API";
import ListItems from "../components/ListItems";

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
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Indoor Plants</strong>
              </h1>
              <h2 className="text-center">Discover new plants!</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card >
              {this.state.plants.length ? (
                <Container>
                  {this.state.plants.map(plant => (

                    <ListItems key={plant._id} commonName={plant.commonName} scientificName={plant.scientificName} images={plant.image} description={plant.description} title={plant.title} id={plant._id} />

                  ))}
                </Container>
              ) : (
                <h2 className="text-center">No Plants Match Your Criteria</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Plants;
