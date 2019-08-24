import React, { Component } from "react";
import API from "../utils/API";
import ListItems from "../components/ListItems";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class MyPlantsMain extends Component {
    //need to set the state to reflect the user's plant info - I think this will depend on how
    //the user id is made available via authentication?
    state = {
        user: []
    };


    render() {
        return (
            <div>
                <p>This is my plants main page</p>
            </div>
        );
    }
}

export default MyPlantsMain;
