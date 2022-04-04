import React from 'react';
import {NavLink} from 'react-router-dom'
const Nav = (props) => {
   return (  
   
<nav>
    <div class="holder">
      <ul>
          <li> <NavLink activeClassName='activo' to="/">Home</NavLink></li>
          <li> <NavLink activeClassName='activo' to="/explore">Explore</NavLink></li>
          <li> <NavLink activeClassName='activo' to="/galery">Galery</NavLink></li>
          <li> <NavLink activeClassName='activo' to="/life">Life?</NavLink></li>
          <li> <NavLink activeClassName='activo' to="/solar">Solar system</NavLink></li>
          <li> <NavLink activeClassName='activo' to="/contact">Contact me</NavLink></li>
      </ul>
    </div>
  </nav>
   );
}
import '../../styles/components/layout/Nav.css';
export default Nav;