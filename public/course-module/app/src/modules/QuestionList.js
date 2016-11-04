const React = require('react');
const Question = require('./Question');
const forEach = require('lodash');
const { array } = React.PropTypes;
const shortid = require('shortid');

const QuestionList = React.createClass({
	propTypes: {
    questions: array
  },

  renderQuestion (question) {
    // Note: Sending qid as Question cannot access key.  We need the qid to construct common group name for each choice
    return (
    	<Question 
    		key={ shortid.generate() } 
    		qid={ question.id } 		
    		text={ question.text } 
    		choices={ question.choices } 
    	/>
    )
  },

	render() {
		const listStyle = {
			listStyle: 'none',
			margin: 30
		};
  
		return (
			<ol style={ listStyle } className='quiz-questions'>
        { this.props.questions.map(this.renderQuestion) }
      </ol>
		);
	}
});

module.exports = QuestionList;
