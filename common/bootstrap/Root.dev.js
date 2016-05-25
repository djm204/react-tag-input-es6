import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
// import DevTools from './../../common/DevTools'




export default class Root extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
				<div>
					{ this.props.children }
					
				</div>
			</Provider>
		)
	}
}
