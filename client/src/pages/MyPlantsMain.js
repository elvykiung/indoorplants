import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import API from "../utils/API";
import ListItems from "../components/ListItems";

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
                        {this.state.ifResults ? (
                            <div>
                                <h1 className="heading-title mx-sm-3 mb-2 text-center">Your Saved Plants</h1>

                                {this.state.results.map(user => {
                                    return <ListItems
                                        key={user.plant._id}
                                        images={"http://www.costafarms.com/CostaFarms/" + user.plant.image}
                                        commonName={user.plant.commonName}
                                        scientificName={user.plant.scientificName}
                                        title={user.plant.title}
                                    />

                                })}

                            </div>
                        ) : (
                                <div>
                                </div>


                            )
                        }

                    </div>
                </div>

            </Container>
        );
    }
}

export default MyPlantsMain;
