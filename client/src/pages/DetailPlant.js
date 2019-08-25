// Feature
//   Sticky top with scientific plant name
//   Pic (data from database)
//   Care Detail (data from database)
//   ( Later feature) Add Plant button to insert data to user collation database
//   Sticky bottom navbar
import React, { Component } from "react";
import AddButton from "../components/AddButton/AddButton";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// import ListItems from "../components/ListItems";
import API from "../utils/API";
import Image from "react-bootstrap/Image";

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
            plant: res.data[0]
          });
        }
        console.log(this.state.plant);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card>
              {/* {this.props.match.params.plantName} */}

              <p>Common Name: {this.state.plant.commonName}</p>
              <p>Scientific Name: {this.state.plant.scientificName}</p>
              <p>Description: {this.state.plant.fullDescription}</p>
              <p>Care Instructions: {this.state.plant.growInstructions}</p>
              <Image align="left" src={this.state.plant.images}  />
              
              {console.log("inside render: " + JSON.stringify(this.state.plant))}
              {/* {console.log(this.props.match.params.plantName)}
              {this.state.plants.length ? (
                <Container>
                  {this.state.plants(plant => (
                    <ListItems key={plant._id} commonName={plant.commonName} scientificName={plant.scientificName} images={plant.image} description={plant.description} title={plant.title} />
                  ))}
                </Container>
              ) : (
                <h2 className="text-center">No Plants Match Your Criteria</h2>
              )} */}
            </Card>
          </Col>
        </Row>
        <div>
          <AddButton onClick={this.handleFormSubmit} className="btn btn-info">
            {" "}
            Add Plant{" "}
          </AddButton>
        </div>
      </Container>
    );
  }
}

export default DetailPlant;
