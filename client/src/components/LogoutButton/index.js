import React, { Component } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";

class LogoutButton extends Component {
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
                this.props.history.push("/");
            }
        });
    }


    logout(event) {
        event.preventDefault();
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
            <Nav.Link onClick={this.logout}>
                Logout
        </Nav.Link>)


    }
}

export default LogoutButton;
