import React from 'react';

import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar fixed-top strong-pink ">
    <Link to="/" className="text-white">
      <FaAngleLeft className="ms-2 me-2 home-arrow-button" />
    </Link>
    <h1 className="col-9 fs-4 text-white">World of Nations</h1>

  </nav>
);

export default Header;
