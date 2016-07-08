(function () {
	'use strict';

	var React = require('react');

  var InputComponent = React.createClass({
   	 	propTypes: {
	 	    name: React.PropTypes.string.isRequired,
	 	    id: React.PropTypes.string.isRequired,
	 	    label: React.PropTypes.string.isRequired,
	 	    type: React.PropTypes.string.isRequired,
	 	    newClass: React.PropTypes.string,
			 },

    render() {
      return (
	      <div className={`input-field col ${this.props.newClass}`}>
	        <input 
	        	id={this.props.id} 
	        	type={this.props.type} 
	        	ref={this.props.name} 
	        	className='validate'
	        	required/>
	        <label htmlFor={this.props.id}>{this.props.label}</label>
	      </div>
      );
	  }
	 });

  var ButtonComponent = React.createClass({
 	 	propTypes: {
 	 		name: React.PropTypes.string.isRequired,
 	    text: React.PropTypes.string.isRequired,
 	    action: React.PropTypes.func,
 	    newClass: React.PropTypes.string
		 },

   render() {
   	return (
	   	<button 
	   	 	className={`btn waves-effect waves-light ${this.props.newClass}`} 
	   	 	type='submit' 
	   	 	onClick={this.props.action}
	   	 	name={this.props.name}>
	   	 		{this.props.text}
		  </button>
       );
     }
	 });
	 
	 module.exports = {InputComponent, ButtonComponent};

}());