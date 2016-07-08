$ = jQuery = require('jquery');
var app = document.getElementById('app');
var React = require('react');
var ReactRouter = require('react-router');
var history = ReactRouter.browserHistory;
var Router = ReactRouter.Router
var ReactDom = require('react-dom');
var routes = require('../router/index');

ReactDom.render(<Router history={history} routes={routes}/>, app);