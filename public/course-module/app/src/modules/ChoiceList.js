const React = require('react');
const FormSelect = require('./components/FormSelect');
const { forEach } = require('lodash');
const { number, array, func } = React.PropTypes;

const ChoiceList = React.createClass({

	propTypes: {
    choices: array,
    qid: number,
    onChange: func
  },

	rawHTML()  {
  	return { __html: this.props.text };
  },

  generateArrFromObjectKeys( obj ) {
  	var choices = [];
		_.forEach( obj, function(value, key) {
			if( value ) {
				 choices.push(value);
				}
		});
		return choices;
  },

	renderChoice (choice, i) {
  	 // Each item in an array needs a unigue key, using iterator to create
  	 // Remove iterator if api includes an id for each choice
  	const questionId = this.props.qid;
  	const choiceKey = `c${i}`;

	 	return (
	  	<li key={ choiceKey }>
		   	<FormSelect
		    	  id={ `q${ questionId }${ choiceKey }` }
		    	  type={'radio'}
		    		name={ `q${ questionId }` }
		    		label={ choice }
		    		onChange={ this.props.onChange }
		    	/>
	  	</li>
	   )
  },

	render() {

		const listStyle = {
			listStyle: 'none'
		};

		// was expecting an array of objects per the spec https://github.com/IIP-Design/america-node-api/blob/gh-pages/course.js
		// Instead got an array with 1 object and choices for props, not ideal. This is a workaround
		const choices = this.generateArrFromObjectKeys(this.props.choices[0])

		return (
			<ul style={ listStyle } className='quiz-questions-choices'>{ choices.map(this.renderChoice) }</ul>
		);
	}
});

module.exports = ChoiceList;

