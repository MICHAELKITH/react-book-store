import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Categories">Categories</NavLink>
  </nav>
);

export default NavBar;
