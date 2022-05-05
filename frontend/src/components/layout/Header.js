import React from 'react';
import '../../styles/components/layout/Header.css';


const Header = (props) => {
   return (  
      <header>
    <div class="holder_header">
        <img src="images/logo.png" alt="Logo" className='logo'></img>
        <h1>Amongst the Stars</h1>
    </div>
</header>
   );
}
export default Header;

