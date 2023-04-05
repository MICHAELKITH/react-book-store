import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavBar from './Navbar';

const Header = () => (
  <header>
    <div className="titles">
      <h1 className="store-CMS">Bookstore CMS</h1>
      <NavBar />
    </div>
    <div className="CMS-Circle">
      <FontAwesomeIcon icon={faUser} style={{ color: '#0290ff' }} />
    </div>
  </header>
);

export default Header;
