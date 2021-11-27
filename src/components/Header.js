import React from 'react';

import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar fixed-top strong-pink ">
    <Link to="/" className="text-white">
      <FaAngleLeft className="ms-2 me-2 home-arrow-button" />
    </Link>
    <h1 className="col-9 fs-4 text-white">World of Nations</h1>
    <FaMicrophone className="mx-0" />
    <FaCog className="ms-2 me-3 text-white" />
  </nav>
);

export default Header;
