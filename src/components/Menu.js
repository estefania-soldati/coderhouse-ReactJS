import React from 'react';

const Menu = ({item1, item2, item3, item4}) => {
	return(
<div class="main-menu">
  <div class="container">
    <ul>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
      <li>{item4}</li>
    </ul>
  </div>
</div>
	)
}

export default Menu;