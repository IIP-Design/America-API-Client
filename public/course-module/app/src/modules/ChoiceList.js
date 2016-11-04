const React = require('react');
const FormSelect = require('./components/FormSelect');
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
		    		label={ choice.text }
		    		onChange={ this.props.onChange } 
		    	/>
	  	</li>
	   )
  },
	
	render() {

		const listStyle = {
			listStyle: 'none'
		};

		return (
			<ul style={ listStyle } className='quiz-questions-choices'>{ this.props.choices.map(this.renderChoice) }</ul>
		);
	}
});

module.exports = ChoiceList;

