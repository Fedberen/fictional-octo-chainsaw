import React from 'react';
import {NavLink} from 'react-router-dom'
import '../../styles/components/layout/Nav.css';
const Nav = (props) => {
   return (  
   
<nav>
    <div class="holder">
      <ul>
          <li> <NavLink activeClassName='activo' to="/">Home</NavLink></li>
          <li> <NavLink activeClassName='activo' to="/explore">Explore</NavLink></li>
          <li> <NavLink activeClassName='activo' to="/galery">Galery</NavLink></li>
          <li> <NavLink activeClassName='activo' to="/life">Life?</NavLink></li>
          <li> <NavLink activeClassName='activo' to="/tec">Tecnology</NavLink></li>
          <li> <NavLink activeClassName='activo' to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  </nav>
   );
}
export default Nav;