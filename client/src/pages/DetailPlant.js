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
import Image from "react-bootstrap/Image";
// import ListItems from "../components/ListItems";
import API from "../utils/API";


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
          results:res.data,
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
            <Card style={{ paddingLeft:"5%", paddingRight:"5%", paddingTop:"2%" }}>
              {/* {this.props.match.params.plantName} */}
              <Image src={(this.state.plant.category && this.state.plant.category[0] === "rare") ?
                  this.state.plant.image : "http://www.costafarms.com/CostaFarms/" + this.state.plant.image} />
              <h3 style={{marginTop:"5%"}} className="text-center">{this.state.plant.commonName}</h3>
              <h4 className="text-center">({this.state.plant.scientificName})</h4>
              <p><h4>Description: </h4>{this.state.plant.fullDescription}</p>
              <p><h4>Care Instructions: </h4>{this.state.plant.growInstructions}</p>
              <p><h4>Light Requirements: </h4>{this.state.plant.lightReq}</p>
              <p><h4>Water requirements: </h4>{this.state.plant.waterReq}</p> 
              {/* {console.log("inside render: " + JSON.stringify(this.state.plant))} */} 
              <div>
          <div className="col-10 col-centered card-content mb-4">
            {this.state.ifResults ? (
              <div>
                {this.state.results.map(plant => {
                  if (plant.category && plant.category[0] === "rare"){
                  return  <h3 className="text-center">{this.state.plant.commonName}</h3>;
                  } else {
                  return <div images={"http://www.costafarms.com/CostaFarms/" + plant.image} commonName={plant.commonName} scientificName={plant.scientificName} description={plant.fullDescription} title={plant.title} />;

                  }
                
                })}
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
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
