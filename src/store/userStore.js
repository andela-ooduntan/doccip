(function() {
  'use strict';

  var actionTypes = require('../constants/actionTypes');
  var Dispatcher = require('../dispatcher/appDispatcher');
  var eventEmitter = require('events').EventEmitter;
  var assign = require('object-assign');
  var CHAGE_EVENT = 'change'

  var UserStore = assign({}, eventEmitter.prototype, {
    addChangeListener: function(callback) {
      this.on(CHAGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHAGE_EVENT, callback);
    },

    emitChange: function() {
      this.emit(CHAGE_EVENT);
    }

  });

  Dispatcher.register(function(action) {
    switch (action.actionType) {
      case actionTypes.CREATE_USER:
      	// Make a call to the api Here
        UserStore.emitChange();
        break;
      case actionTypes.EDIT_USER:
        // Make a call to the api Here
        UserStore.emitChange();
        break;
      case actionTypes.DELETE_USER:
        // Make a call to the api Here
        UserStore.emitChange();
        break;
      case actionTypes.FIND_USER:
        // Make a call to the api Here
        UserStore.emitChange();
        break;
      default:
        // statements_def
        break;
    }
  });

  module.exports = UserStore;

}());
