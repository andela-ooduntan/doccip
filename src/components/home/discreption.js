(function() {
	'use strict';

	var React = require('react');

	var Description = React.createClass ({
		  render: function() {
			return (
				<div className='description-text'>
          <div className='main-text'>The Perfect tool to keep your docs.</div>    
          <div className='supporting-text'>Doccip helps you create and manage your docs remotely LEARN MORE.</div>    
        </div>
					);
			}
		  })

	module.exports = Description;

	}());