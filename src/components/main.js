(function() {
  'use strict';

  var React = require('react');
  var Header = require('./common/Header');

  var Home = React.createClass ({
        render: function() {
          return (
            <div>
              <Header/>
              {this.props.children}
            </div>
            );
          }
        });

  module.exports = Home;

}())
