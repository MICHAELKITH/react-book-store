import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/Categories">Categories</Link>
  </nav>
);

export default NavBar;
