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
      plantCare: {},
      startDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

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

  updateWater = () => {
    API.updateMyPlant({
      date: this.state.startDate,
      id: this.state.plantCare._id
    })
      .then(res => {
        console.log(res);
        this.getUserPlants();
      })
      .catch(err => console.log(err));
  };

  handleTabChange = tab => {
    this.setState({ currentTab: tab });
  };

  renderTab = () => {
    if (this.state.currentTab === "todo") {
      return <UserToDo startDate={this.state.startDate} onChange={date => this.handleChange(date)} onClick={() => this.updateWater()} />;
    } else if (this.state.currentTab === "history") {
      return <UserPlantsHistory wateredData={this.state.plantCare.wateredDates} />;
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
        </Jumbotron>
        {/*  {src={"http://www.costafarms.com/CostaFarms/" + this.state.plantCare.plant.image}} */}
        <Image rounded style={{ height: "450px" }} src={this.state.plantCare.plant.category && this.state.plantCare.plant.category[0] === "rare" ? this.state.plantCare.plant.image : "http://www.costafarms.com/CostaFarms/" + this.state.plantCare.plant.image} />

        <NavUser currentTab={this.state.currentTab} handleTabChange={this.handleTabChange} id={this.state.plantCare.plant._id} />
        {this.renderTab()}
      </Container>
    );
  }
}

export default MyPlantsDetail;
