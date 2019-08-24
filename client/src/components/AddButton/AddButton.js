import React from "react";
import Button from 'react-bootstrap/Button';

function AddButton(props){
    return(
            <Button variant="primary" type="submit" className="btn btn-info" {...props}>
                {props.children}
            </Button>
    )
}

export default AddButton;