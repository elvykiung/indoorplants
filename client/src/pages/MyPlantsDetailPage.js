import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import NavUser from "../components/NavUser";
import UserToDo from "../components/PlantToDoList";
import UserPlantsHistory from "../components/UserPlantsHistory";
import DetailPlant from "./DetailPlant";
import API from "../utils/API";
// import Moment from "react-moment";
import moment from "moment";

class MyPlantsDetail extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "todo",
      plantCare: {},
      startDate: new Date(),
      nextWaterDate: "",
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
  //when user pick date of water auto update next water time
  updateWater = () => {
    API.updateMyPlant({
      date: this.state.startDate,
      id: this.state.plantCare._id
    })
      .then(res => {
        console.log("update watered date now");
        this.updateNextWaterDate();
      })
      .then(res => {
        this.getUserPlants();
      })
      .catch(err => console.log(err));
  };

  calculatedNextWaterDate = () => {
    let lastWateredDate = 0;

    if (this.state.plantCare.wateredDates.length === 0) {
      lastWateredDate = this.state.startDate;
    } else {
      lastWateredDate = this.state.plantCare.wateredDates.pop();
    }

    console.log("last water date : " + lastWateredDate);

    let nextWaterDate = 0;

    console.log(this.state.plantCare.plant.waterReq[0]);

    if (this.state.plantCare.plant.waterReq[0].toLowerCase().indexOf("low") !== -1) {
      console.log(moment(lastWateredDate, "YYYY-MM-DD HH:mm:mm"));

      nextWaterDate = moment(lastWateredDate, "YYYY-MM-DD HH:mm:mm")
        .add(10, "days")
        .format("YYYY-MM-DD HH:mm:mm");
    } else if (this.state.plantCare.plant.waterReq[0].toLowerCase().indexOf("medium") !== -1) {
      nextWaterDate = moment(lastWateredDate, "YYYY-MM-DD HH:mm:mm")
        .add(7, "days")
        .format("YYYY-MM-DD HH:mm:mm");
    } else if (this.state.plantCare.plant.waterReq[0].toLowerCase().indexOf("moist") !== -1) {
      nextWaterDate = moment(lastWateredDate, "YYYY-MM-DD HH:mm:mm")
        .add(3, "days")
        .format("YYYY-MM-DD HH:mm:mm");
    }

    console.log("next water date : " + nextWaterDate);

    this.setState({
      nextWaterDate: nextWaterDate
    });
  };

  updateNextWaterDate = () => {
    this.calculatedNextWaterDate();
    API.updateNextWaterDate({
      nextWaterDate: this.state.nextWaterDate,
      id: this.state.plantCare._id
    })
      .then(res => {
        console.log("next water date update");
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
      return <DetailPlant newPlant={false} />;
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
        <Image rounded style={{ height: "450px" }} src={this.state.plantCare.plant.category && this.state.plantCare.plant.category[0] === "rare" ? this.state.plantCare.plant.image : "http://www.costafarms.com/CostaFarms/" + this.state.plantCare.plant.image} />

        <NavUser currentTab={this.state.currentTab} handleTabChange={this.handleTabChange} id={this.state.plantCare.plant._id} />
        {this.renderTab()}
      </Container>
    );
  }
}

export default MyPlantsDetail;
