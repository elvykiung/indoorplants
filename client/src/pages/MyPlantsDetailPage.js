import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import NavUser from "../components/NavUser";
import UserToDo from "../components/PlantToDoList";
import UserPlantsHistory from "../components/UserPlantsHistory";
import DetailPlant from "./DetailPlant";
import API from "../utils/API";

class MyPlantsDetail extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "todo",
      plantCare: {}
    };
  }

  componentDidMount() {
    this.getUserPlants();
  }

  getUserPlants = () => {
    API.getMyPlantDetail(this.props.match.params.plantId)
      .then(res => {
        console.log(res.data[0]);
        this.setState({
          ifResults: true,

          plantCare: res.data[0]
        });
      })
      .catch(err => console.log(err));
  };

  handleTabChange = tab => {
    this.setState({ currentTab: tab });
  };

  renderPage = () => {
    if (this.state.currentTab === "todo") {
      return <UserToDo />;
    } else if (this.state.currentTab === "history") {
      return <UserPlantsHistory />;
    } else if (this.state.currentTab === "DetailPlant") {
      return <DetailPlant />;
    }
  };

  render() {
    if (this.state.plantCare.plant == null) {
      return <p>Loading</p>;
    }
    return (
      <Container className="text-center">
        <Jumbotron>
          <h1>{this.state.plantCare.plant.commonName} </h1>
          <p>{this.state.plantCare.plant._id}</p>
        </Jumbotron>

        <Image src={this.state.plantCare.plant.category[0] === "rare" ? this.state.plantCare.plant.image : "http://www.costafarms.com/CostaFarms/" + this.state.plantCare.plant.image} rounded style={{ height: "450px" }} />

        <NavUser currentTab={this.state.currentTab} handleTabChange={this.handleTabChange} id={this.state.plantCare.plant._id} />
        {this.renderPage()}
      </Container>
    );
  }
}

export default MyPlantsDetail;
