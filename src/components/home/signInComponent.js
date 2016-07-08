(function() {
	'use strict';

	var React = require('react');
	var Input = require('../common/input');
	var ButtonComponent = Input.ButtonComponent;

	var SignInComponent = React.createClass ({
		showSignIn: function (event) {
			 event.preventDefault();
			 alert('So this is working because of the wisdow God gave me');
		},
		render: function() {
			return (   
				<div className='signup-container'>
					<span>Existing user? Sign in</span>
					<ButtonComponent
			  		text='SIGN IN'
			  		action={this.showSignIn}
			  		name='sign-in'
			  		newClass='custom-green custom-signup-btn'/>
				</div>
			);
		}
	});

	module.exports = SignInComponent;

	}());