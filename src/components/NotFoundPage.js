(function() {
    'use strict';

    var React = require('react');

    var NotFound = React.createClass ({
          render: function() {
            return (
              <div>Oops!!! The page you are looking for doesnt exist</div>
              );
            }
          });

    module.exports = NotFound;

    }());
