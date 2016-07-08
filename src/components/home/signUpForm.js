(function() {
  'use strict';

  var Input = require('../common/input');
  var InputComponent = Input.InputComponent;
  var ButtonComponent = Input.ButtonComponent;
  var React = require('react');
  var userAction = require('../../actions/userActions');
  var userStore = require('../../store/userStore');

  var SignUpForm = React.createClass({
    saveUser: function(event) {
      event.preventDefault();
      userAction.createUser(userData);
      console.log('Yeah you are on the right track');
    },

    render() {
      return ( 
      	<form onSubmit = { this.saveUser } className = "col s12">
        	<div className = 'row'>
        		<InputComponent name = 'first_name'
			        type = 'text'
			        id = 'first_name'
			        label = 'First Name'
			        newClass = 's6 form-spacing'/>
		       	<InputComponent name = 'last_name'
			        type = 'text'
			        id = 'last_name'
			        label = 'Last Name'
			        newClass = 's6 form-spacing'/>
		      </div> 
		      <div className = "row">
		        <InputComponent name = 'email'
			        type = 'email'
			        id = 'email'
			        label = 'Email'
			        newClass = 's12 form-spacing'/>
		      </div> 
		      <div className = "row">
		        <InputComponent name = 'password'
			        type = 'password'
			        id = 'password'
			        label = 'Password'
			        newClass = 's12 form-spacing'/>
		      </div> 
		      <div className = "row">
		        <InputComponent name = 'confirm-password'
			        type = 'password'
			        id = 'confirm-password'
			        label = 'Confirm Password'
			        newClass = 's12 form-spacing'/>
		      </div> 
		      <ButtonComponent text = 'SIGN UP'
		        name = 'sign-up'
		        newClass = 'custom-blue custom-btn'/>
		    </form>
      );
    }
  });

  module.exports = SignUpForm;

}());
