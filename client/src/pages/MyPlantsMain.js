import React, { Component } from 'react';
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

// import auth from '../auth';
// import API from "../utils/API";
// import ListItems from "../components/ListItems";

class MyPlantsMain extends Component {
  //need to set the state to reflect the user's plant info - I think this will depend on how
  //the user id is made available via authentication?
  // state = {
  //   user: []
  // };

  // componentDidMount() {
  //     this.getUserPlants();
  // }

  // getUserPlants = () => {
  //     API.getUserPlants(userid) //
  //         .then(res =>
  //             this.setState({
  //                 ifResults: true,
  //                 user: res.data
  //             })
  //         )
  //         .catch(err => console.log(err));
  // };

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
          // loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      this.props.history.push('/');
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
        console.log('Logout error')
    })
  }




  render() {
    
    return (
      <Container>
        <Jumbotron fluid className="text-center" updateUser={this.updateUser} loggedIn={this.state.loggedIn} >
          {/* User's plant if logged in: */}
          {this.state.loggedIn && 
          <h1 className="text-primary">{this.state.username} Plants</h1>
          }
        </Jumbotron>

        <div>
          <div className="col-10 col-centered card-content mb-4">
            <div>
              <h1 className="heading-title mx-sm-3 mb-2 text-center">Your Saved Plants</h1>
              <Link as={Link} to="/myPlants/detail">
                <Image
                  src="https://houseraccoon.com/wp-content/uploads/2019/05/Monstera-Deliciosa-Albo-Variegata.jpg"
                  rounded
                  style={{ height: '450px' }}
                />
              </Link>
              <button onClick={this.logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default MyPlantsMain;
