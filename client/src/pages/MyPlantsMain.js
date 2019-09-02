import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from 'axios';

class MyPlantsMain extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.props.history.push('/LogIn');
      }
    })
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/api/user/logout').then(response => {
      console.log(response.data)
      this.props.history.push('/');
    }).catch(error => {
        console.log('Logout error:' + error)
    })
  }





  render() {
    return (
      <Container>
        <Jumbotron fluid className="text-center" >
            {/* User's plant if logged in: */}
            {this.state.loggedIn && 
          <h1 className="text-primary">Welcome {this.state.username}! Your Plants</h1>
          }
        </Jumbotron>

        <div>
          <div className="col-10 col-centered card-content mb-4">
            <div >
              <h2 className="heading-title mx-sm-3 mb-2 text-center" >Your Saved Plants</h2>
              <Link as={Link} to="/myPlants/detail">
                <Image src="https://houseraccoon.com/wp-content/uploads/2019/05/Monstera-Deliciosa-Albo-Variegata.jpg" rounded
                  style={{ height: '250px' }}
                />
              </Link>
              <div>
              <Button  onClick={this.logout}
              variant="primary" type="submit">
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