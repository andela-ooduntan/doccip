(function() {
	'use strict';

	var React = require('react');
  var Discreption = require('./discreption');
  var SignUpComponent = require('./signUpComponent');
  var SignInComponent = require('./signInComponent');

	var HomeContent = React.createClass ({
	  render: function() {
			return (
				<div className='info-container'>
          <Discreption/>
          <div className='form-container'>
	          <SignUpComponent/>
	          <SignInComponent/>
          </div>
        </div>
			);
		}
	})

	module.exports = HomeContent;

}());