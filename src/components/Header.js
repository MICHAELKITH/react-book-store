import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavBar from './Navbar';

const Header = () => (
  <header>
    <div className="Title-nav">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <NavBar />
    </div>
    <div className="Oval">
      <FontAwesomeIcon icon={faUser} style={{ color: '#0290ff' }} />
    </div>
  </header>
);

export default Header;
