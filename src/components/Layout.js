import React from 'react';
import Navbar from './Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/layout.scss'

const Layout = props => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
