import React, { Component } from "react";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import API from "../utils/API";


class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }


render() {
    return (
      <div>
       <Card style={{ margin: "auto" }}>
          <Card.Img src="https://3c9sm1yzqy518hwx3f6o4c64-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Succulent-1--1030x381.jpg" alt="Home" />
          <Card.ImgOverlay>
            <Card.Title className="text-white text-center" style={{ "font-size": "4vw", margin: "auto", fontWeight: "bold" }}>
              Home Page
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
          <div>
         <Button as="a" href="/login" variant="primary" type="submit" style={{marginLeft:"38%", paddingLeft:"10%", paddingRight:"10%"}}>
            Log In
         </Button>
         <br />
         <Button as="a" href="/signup" variant="primary" type="submit" style={{marginLeft:"38%", paddingLeft:"10%", paddingRight:"9%"}}>
            Sign Up
         </Button>
        </div>
      </div>
    );
  }
}

export default Login;