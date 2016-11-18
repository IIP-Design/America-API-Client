const React = require('react');
//const FormSelect = require('./components/FormSelect');
const { forEach } = require('lodash');
const { number, array, func } = React.PropTypes;

const ChoiceList = React.createClass({

	propTypes: {
    choices: array,
    qid: number,
    handleChange: func
  },

  getInitialState () {
    return {
      selectedOption: ''
    };
  },

	rawHTML()  {
  	return { __html: this.props.text };
  },

  handleChange (e) {
  	this.setState({
    	selectedOption: e.target.id
  	});

		this.props.handleChange(e);
  },

  // shouldComponentUpdate(nextProps, nextState) {
		// console.log('shouldComponentUpdate')
		// console.dir(nextState)
		// return true;
  // },

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
  	const id = `q${ questionId }${ choiceKey }`;

	 	return (
	  	<li key={ choiceKey }>
		    <label htmlFor={ `q${ questionId }${ choiceKey }` }>
					<input
						id={ `q${ questionId }${ choiceKey }` }
						name={ `q${ questionId }` }
						type={'radio'}
						checked={ this.state.selectedOption === id  }
						onChange={ this.handleChange }
					/>
					{ choice }
				</label>
	  	</li>
	   )
  },

	render() {
		// was expecting an array of objects per the spec https://github.com/IIP-Design/america-node-api/blob/gh-pages/course.js
		// Instead got an array with 1 object and choices for props, not ideal. This is a workaround
		const choices = this.generateArrFromObjectKeys(this.props.choices[0])

		return (
			<ul>{ choices.map(this.renderChoice) }</ul>
		);
	}
});

module.exports = ChoiceList;
