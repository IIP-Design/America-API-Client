const React = require('react');
const Question = require('./Question');
const forEach = require('lodash');
const { array, func } = React.PropTypes;
const shortid = require('shortid');

const QuestionList = React.createClass({
	propTypes: {
    questions: array,
    handleChange: func
  },

  shouldComponentUpdate: function(nextProps) {
  	return false;
  },

  handleChange (e) {
  	this.props.handleChange(e.target.id);
  },

  renderQuestion (question, i) {
    // Note: Sending qid as Question cannot access key.  We need the qid to construct common group name for each choice
    return (
    	<Question
    		key={ shortid.generate() }
    		qid={ i }
    		text={ question.text }
    		choices={ question.choices }
    		handleChange={ this.handleChange }
    	/>
    )
  },

	render() {
		return (
			<ol id="questionList" className='quiz-questions'>
        { this.props.questions.map(this.renderQuestion) }
      </ol>
		);
	}
});

module.exports = QuestionList;
