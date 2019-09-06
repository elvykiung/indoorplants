import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import NavUser from "../components/NavUser";
import UserToDo from "../components/PlantToDoList";
import UserPlantsHistory from "../components/UserPlantsHistory";
import DetailPlant from "./DetailPlant";
import API from "../utils/API";
import moment from "moment";
import Card from "react-bootstrap/Card";
import "./style.css";

class MyPlantsDetail extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "todo",
      plantCare: {},
      startDate: new Date(),
      nextWaterDate: ""
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
    let lastWateredDate = this.state.startDate;

    console.log("last water date : " + lastWateredDate);

    let nextWaterDate = 0;

    console.log(this.state.plantCare.plant.waterReq[0]);

    nextWaterDate = moment(lastWateredDate, "YYYY-MM-DD HH:mm:mm");

    let waterRequirement = this.state.plantCare.plant.waterReq[0].toLowerCase();

    if (waterRequirement.indexOf("low") !== -1) {
      nextWaterDate.add(10, "days");
    } else if (waterRequirement.indexOf("medium") !== -1) {
      nextWaterDate.add(7, "days");
    } else if (waterRequirement.indexOf("moist") !== -1) {
      nextWaterDate.add(3, "days");
    }

    nextWaterDate = nextWaterDate.format("YYYY-MM-DD HH:mm:mm");

    console.log("next water date : " + nextWaterDate);

    this.setState({
      nextWaterDate: nextWaterDate
    });
  };

  updateNextWaterDate = () => {
    this.calculatedNextWaterDate();
    API.updateNextWaterDate({
      nextWaterDate: this.state.nextWaterDate,
      id: this.state.plantCare._id,
      recipient: this.state.plantCare.user.email,
      plantName: this.state.plantCare.plant.commonName
    })
      .then(res => {
        console.log("next water date update");
        console.log("user email address is " + this.state.plantCare.user.email);
        console.log("user plant name is " + this.state.plantCare.plant.commonName);
      })
      .catch(err => console.log(err));
  };

  handleTabChange = tab => {
    this.setState({ currentTab: tab });
  };

  renderTab = () => {
    if (this.state.currentTab === "todo") {
      return <UserToDo startDate={this.state.startDate} onChange={date => this.handleChange(date)} onClick={() => this.updateWater()} nextWaterDate={this.state.plantCare.nextWaterDates} />;
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
      <Card>
        <Image src="https://images.wallpaperscraft.com/image/white_rose_petals_flower_bright_68307_1600x1200.jpg" alt="Home" />
        <Card.ImgOverlay style={{ marginTop: "5%" }}>
          <Container className="text-center">
            <Jumbotron>
              <h1>{this.state.plantCare.plant.commonName} </h1>
            </Jumbotron>
            <Image rounded style={{ height: "450px" }} src={this.state.plantCare.plant.category && this.state.plantCare.plant.category[0] === "rare" ? this.state.plantCare.plant.image : "http://www.costafarms.com/CostaFarms/" + this.state.plantCare.plant.image} />

            <NavUser currentTab={this.state.currentTab} handleTabChange={this.handleTabChange} id={this.state.plantCare.plant._id} />
            {this.renderTab()}
          </Container>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default MyPlantsDetail;
