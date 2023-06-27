import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import logo from '../images/logo.png';

const Navigation = () => (
  <Stack direction="horizontal" gap={3} className="mx-5 mx-3 pb-3" style={{ borderBottom: '1px solid black' }}>

    <img src={logo} alt="SpaceX" style={{ width: 65, height: 65 }} />
    <h1>Space Travelers` Hub</h1>
    <Nav className="ms-auto">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" activeClassName="active">Rockets</Nav.Link>
        <Nav.Link as={NavLink} to="/Missions" activeClassName="active" style={{ borderRight: '1px solid black', paddingRight: '15px' }}>
          Missions
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <div className="ms-auto">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/My Profile" activeClassName="active">My Profile</Nav.Link>
      </Nav.Item>
    </div>

  </Stack>
);

export default Navigation;
