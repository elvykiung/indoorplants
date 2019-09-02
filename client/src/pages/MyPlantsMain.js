import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import auth from '../auth';
import AddButton from "../components/AddButton/AddButton";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
// import API from "../utils/API";
// import ListItems from "../components/ListItems";

class MyPlantsMain extends Component {
  //need to set the state to reflect the user's plant info - I think this will depend on how
  //the user id is made available via authentication?
  state = {
    user: []
  };

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

  render() {
    return (
      <Container>
        <Jumbotron fluid className="text-center">
          <h1 className="text-primary">Your Plants</h1>
        </Jumbotron>

        <div>
          <div className="col-10 col-centered card-content mb-4">
            <div >
              <Link as={Link} to="/myPlants/detail">
                <Image src="https://houseraccoon.com/wp-content/uploads/2019/05/Monstera-Deliciosa-Albo-Variegata.jpg" rounded
                  style={{ height: '250px' }} />
              </Link>
              <div>
              <div className="d-flex flex-column">
  <ButtonGroup size="lg">
    <Button>To Do</Button>
    <Button>History</Button>
    <Button>Info</Button>
  </ButtonGroup>
</div>
                <AddButton style={{ backgroundColor: "transparent", paddingLeft: "10%", paddingRight: "10%" }} onClick={() => {
                  auth.login(() => {
                    this.props.history.push('/');
                  });
                }}
                  variant="primary" type="submit">
                  Log out
          </AddButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default MyPlantsMain;