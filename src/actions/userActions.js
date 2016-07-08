(function () {
	'use strict';

	var Dispatcher = require('../dispatcher/appDispatcher');
	var actionTypes = require('../constants/actionTypes');

	var userActions = {
		createUser: function (user) {
			 Dispatcher.dispatch({
			 	actionType: actionTypes.CREATE_USER,
			 	data: user
			 });
		}
	}

	module.exports = userActions;
}());