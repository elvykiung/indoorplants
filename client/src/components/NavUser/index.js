import Nav from 'react-bootstrap/Nav';
import React from 'react';

function NavUser(props) {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/todo">
      <Nav.Item>
        <Nav.Link
          href="#todo"
          onClick={() => props.handleTabChange('todo')}
          className={props.currentPage === 'todo' ? 'nav-link active' : 'nav-link'}
        >
          To Do
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          href="#history"
          onClick={() => props.handleTabChange('history')}
          className={props.currentPage === 'history' ? 'nav-link active' : 'nav-link'}
        >
          History
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          href={'/plants/alocasia-frydek' + props.id}
          onClick={() => props.handleTabChange('DetailPlant')}
          className={props.currentPage === 'DetailPlant' ? 'nav-link active' : 'nav-link'}
        >
          More Info
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavUser;
