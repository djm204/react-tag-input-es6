import React from 'react';


const NavButtonDropdown = (props) =>
	<li>
		<a target={ props.target } href={ props.link }>{ props.name }</a>
	</li>;


export default NavButtonDropdown;