import React from "react";
import Form from "react-bootstrap/Form";

function SearchBar(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{ fontWeight: "bold" }}>Enter A Plant Name</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Search Plant Name (requied)" {...props} />
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
