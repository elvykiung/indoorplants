import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import NavUser from "../components/NavUser";
import UserToDo from "../components/PlantToDoList";
import UserPlantsHistory from "../components/UserPlantsHistory";
import DetailPlant from "./DetailPlant";

class MyPlantsDetail extends Component {
  state = {
    currentPage: "todo"
  };

  handleTabChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "todo") {
      return <UserToDo />;
    } else if (this.state.currentPage === "history") {
      return <UserPlantsHistory />;
    } else if (this.state.currentPage === "DetailPlant") {
      return <DetailPlant />;
    }
  };

  render() {
    return (
      <Container className="text-center">
        <Jumbotron>
          <h1>Plat Name</h1>
        </Jumbotron>

        <Image src="https://houseraccoon.com/wp-content/uploads/2019/05/Monstera-Deliciosa-Albo-Variegata.jpg" rounded style={{ height: "450px" }} />

        <NavUser currentPage={this.state.currentPage} handleTabChange={this.handleTabChange} />
        {this.renderPage()}
      </Container>
    );
  }
}

export default MyPlantsDetail;
