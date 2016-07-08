(function() {
	'use strict';

	var React = require('react');
	var SignUpForm = require('./signUpForm');

	var SignUpComponent = React.createClass ({
		render: function() {
			return (   
				<div>
					<div className='signup-wrapper'>
						<div>Sign up for free</div>
						<div className='small-signup-text'>Create a free Doccip account</div>
					</div>
					<div className="row">
						<SignUpForm/>
					</div>
				</div>
			);
		}
	});

	module.exports = SignUpComponent;

	}());