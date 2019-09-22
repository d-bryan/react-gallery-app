import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom';

// components
import ResultsContainer from './ResultsContainer';
import beachesData from '../data/beaches';

const Nav = () => (
  <div>
    <h2>Flickr Search App</h2>
    <div className="navigation-div">
      <nav className="main-nav">
        <ul>
          <li><Link to='/beaches'>Beaches</Link></li>
          <li><Link to='/parks'>Parks</Link></li>
          <li><Link to='/sunsets'>Sunsets</Link></li>
        </ul>
      </nav>
    </div>
  </div>
  );

export default Nav;