import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import logo from '../images/logo.png';

const Navigation = () => (
  <Stack direction="horizontal" gap={3} className="mx-5 my-3 pb-3" style={{ borderBottom: '1px solid black' }}>
    <img src={logo} style={{ width: 65, height: 65 }} alt="logo" />
    <h1>Space Travelers` Hub</h1>
    <Nav className="ms-auto">
      <Nav.Item><Nav.Link as={NavLink} to="/" className="nav-link-effect">Rockets</Nav.Link></Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          className="nav-link-effect"
          to="/missions"
          style={{ marginRight: '1rem' }}
        >
          Missions
        </Nav.Link>
      </Nav.Item>
      <h6 style={{ marginTop: '0.5rem', marginRight: '1.5rem' }}>|</h6>
      <Nav.Item><Nav.Link as={NavLink} className="nav-link-effect" to="/myprofile" style={{ marginRight: '3.5rem' }}>My Profile</Nav.Link></Nav.Item>
    </Nav>
  </Stack>
);

export default Navigation;
