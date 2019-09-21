import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
