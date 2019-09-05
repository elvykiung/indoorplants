import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import API from "../utils/API";
import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";
import AddPlant from "../components/AddPlant";

class DetailPlant extends Component {
  constructor() {
    super();
    this.state = {
      plant: {}
    };
  }

  componentDidMount() {
    this.getPlantsbyID();
  }

  getPlantsbyID = () => {
    API.getPlantsbyID(this.props.match.params.plantName)
      .then(res => {
        // res.data is an array of plants
        // this should only have 1 plant because we are
        // querying by name
        if (res.data.length > 0) {
          // only get the first plant and keep it
          this.setState({
            ifResults: true,
            results: res.data,
            plant: res.data[0]
          });
        }
        console.log(this.state.plant);
      })
      .catch(err => console.log(err));
  };

  // addPlant = data => {
  //   API.saveMyPlant({
  //     plant: data
  //   })
  //     .then(res => {
  //       console.log(res);
  //       this.props.history.push("/myPlants");
  //     })
  //     .catch(err => console.log(err));
  // };


  renderAddPlantButton = () => {
    if (this.props.newPlant) {
      return <AddPlant plant={this.state.plant._id} />;
    }
  };

  render() {
    if (this.state.plant.image == null) {
      return <p>Loading</p>;
    }
    return (
      <Container style={{ marginBottom: "20%" }}>
        <Row>
          <Col size="md-12">
            <Card style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "2%" }}>
              <Image style={{ width: "400px" }} rounded align="left" className="mx-auto d-block" src={this.state.plant.category && this.state.plant.category[0] === "rare" ? this.state.plant.image : "http://www.costafarms.com/CostaFarms/" + this.state.plant.image} />

              <h3 className="text-center">{this.state.plant.commonName}</h3>
              <h4 className="text-center">{this.state.plant.scientificName}</h4>
              <h4>Description:{this.state.plant.fullDescription} </h4>
              <h4>Care Instructions: {this.state.plant.growInstructions}</h4>
            </Card>
          </Col>
        </Row>
        <div>
          {this.renderAddPlantButton()}
        </div>
      </Container>
    );
  }
}

export default DetailPlant;
