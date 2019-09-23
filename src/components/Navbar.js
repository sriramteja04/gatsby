import React from 'react';
import { Link } from 'gatsby';
import '../scss/Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="list-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/examples">Examples</Link>
        </li>
        <li>
          <Link to="/images">Images</Link>
        </li>
        <li>
          <Link to="/tours">Tours</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
