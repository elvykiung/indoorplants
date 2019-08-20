//  Feature
//   Search Input box component
//   Search result component show only when user as done search
//   list card component
//   sticky bottom navbar
import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";


class SearchMain extends Component {
  state = {};
  render() {
    return (
     <div className="container">
      <div>
        <SearchForm
            name="title"
            value={this.state.title}
            onChange = {this.handleInputChange}
            />
            <SearchButton
            onClick={this.handleFormSubmit}
            className="btn btn-info"
            >
            Search
            </SearchButton>

      </div>
      </div>
    );
  }
}

export default SearchMain;
