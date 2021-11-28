import React from 'react';

import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar fixed-top strong-pink ">
    <Link to="/" className="text-white">
      <FaAngleLeft className="ms-2 ms-md-3 ms-lg-5 me-2 home-arrow-button" />
    </Link>
    <h1 className="col-10 me-4 me-md-5 me-lg-0 col-sm-10 col-lg-10 fs-4 text-white">World of Nations</h1>

  </nav>
);

export default Header;
