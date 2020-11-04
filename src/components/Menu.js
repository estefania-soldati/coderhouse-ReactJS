import React from 'react';

const Menu = ({children}) => {
	return(
    <div class="main-menu">
      <div class="container">
        <ul>
          {children}
        </ul>
      </div>
    </div>
	)
}

export default Menu;