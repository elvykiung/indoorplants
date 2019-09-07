import React, { Component } from "react";
import axios from "axios";
import StickyBottom from "../Nav";


class NavContainer extends Component {
    constructor() {
        super();
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
    }

    updateUser(userObject) {
        this.setState(userObject);
    }

    getUser() {
        axios.get("/api/user/").then(response => {
            if (response.data.user) {
                console.log("Get User: There is a user saved in the server session: ");

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                });
            } else {
                console.log("Get user: no user");
                //this.props.history.push("/");
            }
        });
    }


    render() {
        return (
            <StickyBottom loggedIn={this.state.loggedIn} />
        )
    }
}

export default NavContainer;


