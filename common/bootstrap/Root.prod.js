import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'


import Page from './../../common/Page';
import NavBar from './../../common/navigation/NavBar';


export default class Root extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
				<div>
					<Page>
						<NavBar />
					</Page>
				</div>
			</Provider>
		)
	}
}
