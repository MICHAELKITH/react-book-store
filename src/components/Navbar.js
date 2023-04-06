import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <NavLink to="/">BOOKS</NavLink>
    <NavLink to="/Categories">CATEGORIES</NavLink>
  </nav>
);

export default NavBar;
