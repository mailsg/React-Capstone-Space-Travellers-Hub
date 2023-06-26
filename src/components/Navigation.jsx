import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const navbars = [
  {
    to: '/',
    text: 'Rockets',
  },
  {
    to: '/Missions',
    text: 'Missions',
  },
  {
    to: '/My Profile',
    text: 'My Profile',
  },
];

const Navigation = () => (
  <div className="navbar">
    <nav>
      <h1 className="logo">Space Travelers` Hub</h1>
      <ul>
        {navbars.map((navlink) => (
          <li key={navlink.to}>
            <NavLink to={navlink.to} className="">
              {navlink.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navigation;
