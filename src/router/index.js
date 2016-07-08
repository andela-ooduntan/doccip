(function(){
	'use strict';

	var React = require('react');
	var ReactRouter = require('react-router');
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;

	var routes = (
			<Route name='app' path='/' component={require('../components/main')}>
				<IndexRoute component={require('../components/home/homePage')} />
				<Route path='about' component={require('../components/about/aboutPage')}/>
				<Route path='the-app' component={require('../components/appInfo/infoPage')}/>
				<Route path='*' component={require('../components/NotFoundPage')}/>
			</Route>
		)

	module.exports = routes;

}());