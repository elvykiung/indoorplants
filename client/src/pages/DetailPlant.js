// Feature
//   Sticky top with scientific plant name
//   Pic (data from database)
//   Care Detail (data from database)
//   ( Later feature) Add Plant button to insert data to user collation database
//   Sticky bottom navbar
import React, { Component } from "react";
import AddButton from "../components/AddButton/AddButton";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import API from "../utils/API";

class DetailPlant extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    API.getPlantsbyName(this.props.match.params.plantName)
      .then(res => {
        console.log(res.data);

        this.setState({
          results: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
      <Card as="a" href="/easy-to-grow" style={{ margin: "auto" }}>
        <Card.Img src="#" alt="My Plant" />
        <Card.ImgOverlay>
          <Card className="text-white text-center" style={{ "font-size": "4vw", margin: "10%", fontWeight: "bold" }}>
          </Card>
        </Card.ImgOverlay>
      </Card>
  
         <div> 
            <AddButton
            onClick={this.handleFormSubmit}
            className="btn btn-info">
            Add Plant
            </AddButton>
         </div>
    </Container>
    );
  }
}

export default DetailPlant;
