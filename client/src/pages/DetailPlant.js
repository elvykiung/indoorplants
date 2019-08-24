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
import ListItems from "../components/ListItems";
import API from "../utils/API";

class DetailPlant extends Component {
    state = {
      plants: [] 
    };
  
    componentDidMount() {
      this.getPlantsbyName();
    }
  
    getPlantsbyName = () => {
      API.getPlantsbyName(this.props.name)
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
            <Card >
              {this.state.plants.length ? (
                <Container>
                  {this.state.plants(plant => (
                    <ListItems key={plant._id} commonName={plant.commonName} scientificName={plant.scientificName} images={plant.image} description={plant.description} title={plant.title} />
                  ))}
                </Container>
              ) : (
                <h2 className="text-center">No Plants Match Your Criteria</h2>
              )}
            </Card>
          </Col>
        </Row>
         <div>
            <AddButton
            onClick={this.handleFormSubmit}
            className="btn btn-info"> Add Plant </AddButton>    
       </div>

      </Container>
    );
  }
}

export default DetailPlant;
