import React from 'react';
import logo from '../img/logo.png';
import './Header.css';

export default () => (
  <div className="header">
    <img src={logo} className="Header-logo" alt="logo"/>
  </div>
);
