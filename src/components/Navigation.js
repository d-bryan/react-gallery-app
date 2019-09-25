import React from 'react'

import { Link } from 'react-router-dom';

const Navigation = () => {
    return (

    <div className="navigation-div">
      <nav className="main-nav">
        <ul>
          <li>
            <Link to='/beaches'>Beaches</Link>
          </li>
          <li>
            <Link to='/parks'>Parks</Link>
          </li>
          <li>
            <Link to='/sunsets'>Sunsets</Link>
          </li>
        </ul>
      </nav>
    </div>

    );
}

export default Navigation;