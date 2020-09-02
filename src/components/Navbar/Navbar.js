import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarWrapper from './NavbarWrapper';

import shape from '../../picture/shape.svg'
import logo from '../../picture/logo.svg'

const Navbar = props => {
  return (
    <NavbarWrapper>
      <nav>
        <div className="navbar-brand">
          <img src={shape} alt="shape" />
          <div className="navbar-brand-text">
            <h1>Point-X</h1>
            Blockchain<br />Rewards Program
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink exact to="/" className="nav-link">Tasks campaigns</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/items" className="nav-link">
              Goods items
              <span className="goodItems">{props.goodItems || 41}</span> 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/balance" className="nav-link">Balance  <span className="balance">{props.balance || 0} Px</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/support" className="nav-link">Support Center</NavLink>
          </li>
        </ul>
        <div className="navbar-name">
          <img src={logo} alt="logo" />
          <div className="navbar-name-text">
            DrBeats inc
            <br />
            <span className="navbar-name-status">Administrator</span>
          </div>
        </div>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
