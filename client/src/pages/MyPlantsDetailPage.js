import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import NavUser from '../components/NavUser';
import UserToDo from '../components/PlantToDoList';
import UserPlantsHistory from '../components/UserPlantsHistory';
import DetailPlant from './DetailPlant';
import API from "../utils/API";

class MyPlantsDetail extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'todo',
      plantCare: {}
    };
  }

  componentWillMount() {
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

  handleTabChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === 'todo') {
      return <UserToDo />;
    } else if (this.state.currentPage === 'history') {
      return <UserPlantsHistory />;
    } else if (this.state.currentPage === 'DetailPlant') {
      return <DetailPlant />;
    }
  };

  render() {

    if(this.state.plantCare.plant == null){return <p>Loading</p>}
    return (
      <Container className="text-center">
        <Jumbotron>
          <h1>Plat Name:{this.state.plantCare.plant.commonName} </h1>
        </Jumbotron>

        <Image src="https://houseraccoon.com/wp-content/uploads/2019/05/Monstera-Deliciosa-Albo-Variegata.jpg" rounded style={{ height: '450px' }} />

        <NavUser currentPage={this.state.currentPage} handleTabChange={this.handleTabChange} />
        {this.renderPage()}
      </Container>
    );
  }
}

export default MyPlantsDetail;
