import { Link } from 'react-router-dom';
import React from 'react';

const Nav = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Articles Log
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/create">Create An Article</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
