
(function() {
    'use strict';

    var React = require('react');
    var Link = require('react-router').Link;

    var Header = React.createClass ({
          render: function() {
            return (
            	 <div className="navbar-fixed">
                <nav>
                  <div className="nav-wrapper custom-blue">
                    <a href="#!" className="brand-logo">Doccip</a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                      <li><Link to="about">THE APP</Link></li>
                      <li><Link to="the-app">HOW IT WORKS</Link></li>
                      <li><Link to="#">SIGN IN</Link></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                      <li><Link to="about">THE APP</Link></li>
                      <li><Link to="the-app">HOW IT WORKS</Link></li>
                      <li><Link to="#">SIGN IN</Link></li>
                    </ul>
                  </div>
                </nav>
              </div>
        			);
            }
          })

    module.exports = Header;

    }());