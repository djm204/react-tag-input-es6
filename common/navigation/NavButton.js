import React, { Component } from 'react';
import classNames from 'classnames';
import ReactTransitionGroup from 'react-addons-css-transition-group';

class NavButton extends Component {
	constructor(props){
		super(props);
		this.state = { drawerOpen: false};
	}

	render() {
		return (
			<li  onMouseEnter={this.toggleDrawer.bind(this, true)} onMouseLeave={this.toggleDrawer.bind(this, false)} >
				<a href={this.props.link}
				   className={classNames({"has-dropdown": this.props.isDropdown})}>{ this.props.name }</a>
				<ReactTransitionGroup transitionName="show-element" transitionEnterTimeout={200}
									  transitionLeaveTimeout={200}>
				{ this.renderDropdown() }
				</ReactTransitionGroup>
			</li>)
	};

	toggleDrawer(tog){
		this.setState({ drawerOpen: tog});
	}

	renderDropdown() {
		return (this.props.isDropdown && this.state.drawerOpen) ?
			(<ul className="dropdown">
				{this.props.children}
			</ul>)
			: null;
	}
}

export default NavButton;