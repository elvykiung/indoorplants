// Feature
//   Sticky top with scientific plant name
//   Pic (data from database)
//   Care Detail (data from database)
//   ( Later feature) Add Plant button to insert data to user collation database
//   Sticky bottom navbar
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// import ListItems from "../components/ListItems";
import API from "../utils/API";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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

  addPlant = data => {
    API.saveMyPlant({
      plant: data
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Card>
      <Image src="https://images.wallpaperscraft.com/image/white_rose_petals_flower_bright_68307_1600x1200.jpg" alt="Search" />
      <Card.ImgOverlay style={{ marginTop: "5%" }}>
      <Container style={{ marginBottom: "20%" }}>
        <Row>
          <Col size="md-12">
            <Card style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "2%" }}>
              <Image style={{ width: "400px" }} rounded align="left" className="mx-auto d-block" src={this.state.plant.category && this.state.plant.category[0] === "rare" ? this.state.plant.image : "http://www.costafarms.com/CostaFarms/" + this.state.plant.image} />
              <h3 className="text-center">{this.state.plant.commonName}</h3>
              <h4 styleclassName="text-center">{this.state.plant.scientificName}</h4>
              <h4>Description:{this.state.plant.fullDescription} </h4>
              <h4>Care Instructions: {this.state.plant.growInstructions}</h4>
            </Card>
          </Col>
        </Row>
        <div>
          {/* <AddButton onClick={this.handleFormSubmit} className="btn btn-info">
            {" "}
            Add Plant{" "}
          </AddButton> */}

          <Button as={Link} to="/myPlants" variant="primary" size="lg" className="mx-auto d-block" onClick={() => this.addPlant(this.state.plant._id)}>
            Add Plant
          </Button>
        </div>
      </Container>
      </Card.ImgOverlay>
      </Card>
    );
  }
}

export default DetailPlant;
