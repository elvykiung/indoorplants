import React from "react";
import Button from 'react-bootstrap/Button';
import "./style.css";

function SearchButton(props){
    return(
            <Button variant="primary" type="submit" style={{backgroundColor:"transparent"}} className="btn btn-info" {...props}>
                {props.children}
            </Button>
    )
}

export default SearchButton;