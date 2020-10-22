import { Link } from 'react-router-dom';
import React from 'react';

const Nav = (props) => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <Link to="/" className="brand-logo">
            Logo
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
