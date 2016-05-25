import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavButton from './NavButton';
import NavButtonDropdown from './NavButtonDropdown';
import MainNotification from './../notification/MainNotifcation';
import NavMiniButton from './NavMiniButton';

class NavBar extends Component {
	render() {
		const { global } = this.props;

		return (
			<header className="header">
				<a href="http://boldcommerce.com" target="_top" className="logo">
					<img src={`${global.checkout_url}/images/logo.svg`} height="50"/>
				</a>

				<ul className="navigation">
					<NavButton link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}`} name="Home" isDropdown={false}/>
					<NavButton link="#" name="Discount Codes" isDropdown={true}>
						<NavButtonDropdown link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}/discount/create`} name="Create Discount Code" />
						<NavButtonDropdown link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}/discount`} name="View Discount Codes" />
					</NavButton>
					<NavButton link="#" name="Gift Cards" isDropdown={true}>
						<NavButtonDropdown link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}/gift_card/create`} name="Issue Gift Card" />
						<NavButtonDropdown link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}/gift_card`} name="View Gift Cards" />
						<NavButtonDropdown link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}/gift_card/settings`} name="Gift Card Settings" />
					</NavButton>
					<NavButton link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}/payment_information`} name="Payment Information" isDropdown={false} />
					<NavButton link="#" name="Settings" isDropdown={true}>
						<NavButtonDropdown link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}/general_settings`} name="General Settings"  />
						<NavButtonDropdown link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}/shipping_settings`} name="Shipping Settings"  />
						<NavButtonDropdown link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}/tax_settings`} name="Tax Settings"  />
					</NavButton>
				</ul>

				<ul className="admin-bar">
					<MainNotification />
					<NavMiniButton icon="question-circle" isDropdown={true}>
						{/*<NavButtonDropdown link="" name="Help" />
						<NavButtonDropdown link="" name="Terms and Conditions" />
						<NavButtonDropdown link="" name="How to Uninstall" />*/}
					</NavMiniButton>
					<NavMiniButton icon="cog" isDropdown={true}>
						{/*	<NavButtonDropdown link= name="Account Settings" />*/}
						<NavButtonDropdown target="_parent" link={`${global.checkout_url}/admin/${global.shop_type}/${global.shop_url}/logout`} name="Logout" />
					</NavMiniButton>
				</ul>
			</header>
		)
	}
}

function mapStateToProps(state){
	return {
		global: state.global
	}
}

export default connect(mapStateToProps)(NavBar);