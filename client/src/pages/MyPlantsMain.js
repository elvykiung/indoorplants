import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import API from "../utils/API";
import ToDoItems from "../components/ToDoItems";

class MyPlantsMain extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.state = {
      loggedIn: false,
      username: null,
      userPlants: {}
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getUserPlants();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/api/user/").then(response => {
      // console.log("Get user response: ");
      // console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.props.history.push("/");
      }
    });
  }

  getUserPlants = () => {
    API.getMyPlants()
      .then(res => {
        console.log(res.data);
        this.setState({
          ifResults: true,
          userPlants: res.data
        });
      })
      .catch(err => console.log(err));
  };

  logout(event) {
    event.preventDefault();
    // console.log("logging out");
    axios
      .post("/api/user/logout")
      .then(response => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log("Logout error:" + error);
      });
  }

  render() {
    return (
      <Container>
        <Jumbotron fluid className="text-center">
          {/* User's plant if logged in: */}
          {this.state.loggedIn && <h1 className="text-primary">Your saved plants, {this.state.username}! </h1>}
        </Jumbotron>

        <div>
          <div className="col-10 col-centered card-content mb-4">
            <div>
              {this.state.userPlants.length ? (
                <Container >
                  {this.state.userPlants.map(plant => (
                    // console.log(plant.plant)
                    <ToDoItems 
                      // commonName={plant.plant.commonName}
                      //plant.plant._id is the kind on plant in the plant collection
                      key={plant.plant._id}
                      image={"http://www.costafarms.com/CostaFarms/" + plant.plant.image}
                      alt={plant.plant.imageAlt}
                      //id is the specific user's plant id in userPlant collection
                      id={plant._id}
                    />
                  ))}
                </Container>
              ) : (
                <h2 className="text-center">No Plants Match Your Criteria</h2>
              )}

              <div>
                <Button style={{fontSize:"20px", marginBottom:"10%"}} onClick={this.logout} variant="primary" type="submit">
                  Log out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default MyPlantsMain;
