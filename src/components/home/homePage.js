(function() {
    'use strict';

    var React = require('react');
    var HomeContent = require('./content');

    var Home = React.createClass ({
          render: function() {
            return (
              <div>
                <HomeContent/>
              </div>
              );
            }
          });

    module.exports = Home;

    }());
