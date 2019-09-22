import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="navigation-div">
    <nav className="main-nav">
      {/* <li><NavLink exact to="/">Beaches</NavLink></li> */}
      <li><NavLink to="/beaches">Beaches</NavLink></li>
      <li><NavLink to="/parks">Parks</NavLink></li>
      <li><NavLink to="/sunsets">Sunsets</NavLink></li>
    </nav>
  </div>
);

export default Header;