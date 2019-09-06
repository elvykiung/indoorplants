import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import SearchButton from "../../components/SearchButton";
import API from "../../utils/API";
import ListItems from "../../components/ListItems";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "./style.css"

class SearchMain extends Component {
  state = {
    title: "",
    ifResults: false,
    results: [],
    target: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      var title = this.state.title.trim();
      // replacing spaces with a hyphen
      title = title.replace(/ /g, "-");
      // console.log("title is: " + title);

      API.getPlantsbyName(title)
        .then(res => {
          // console.log(res.data);
          // console.log("Plant name is:" + this.state.title);

          this.setState({
            ifResults: true,
            results: res.data
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleEnterPress = event => {
    if (event.key === "Enter") {
      this.handleFormSubmit(event);
    }
  };

  render() {
    return (
      <Card>
        <Image src="https://images.wallpaperscraft.com/image/white_rose_petals_flower_bright_68307_1600x1200.jpg" alt="Search" />
        <Card.ImgOverlay style={{ marginTop: "5%" }}>
          <Container>
            <div id="container">
              <Jumbotron fluid className="text-center" style={{backgroundColor:"transparent"}}>
                <h1 className="text-primary">Search Your Plants</h1>
              </Jumbotron>
            </div>

            <div>

              <SearchBar name="title" value={this.state.title} onChange={this.handleInputChange} onKeyPress={this.handleEnterPress} />
              <SearchButton style={{ fontSize: "20px", backgroundColor: "transparent" }} onClick={this.handleFormSubmit} className="btn btn-info">
                Search
          </SearchButton>
            </div>
            <div>
              <div className="col-10 col-centered card-content mb-4">
                {this.state.ifResults ? (
                  <div>
                    <h1 className="heading-title mx-sm-3 mb-2 text-center">Search Results</h1>

                    {this.state.results.map(plant => {
                      if (plant.category && plant.category[0] === "rare") {
                        return <ListItems key={plant._id} images={plant.image} commonName={plant.commonName} scientificName={plant.scientificName} description={plant.fullDescription} title={plant.title} id={plant._id} />;
                      } else {
                        return <ListItems key={plant._id} images={"http://www.costafarms.com/CostaFarms/" + plant.image} commonName={plant.commonName} scientificName={plant.scientificName} description={plant.fullDescription} title={plant.title} id={plant._id} />;
                      }
                    })}
                  </div>
                ) : (
                    <div />
                  )}
              </div>
            </div>
          </Container>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default SearchMain;
