const React = require('react');
const { connect, dispatch } = require('react-redux');
const { answerQuestion } = require('../actions/actions');
const ChoiceList = require('./ChoiceList');

const { string, number, bool, array } = React.PropTypes;

const Question = React.createClass({
	propTypes: {
    text: string,
    choices: array,
    qid: number,
    correct: bool
  },

  rawHTML()  {
  	return { __html: this.props.text };
  },

  handleChange (e) {
    this.props.dispatch(answerQuestion(e.target.id));
  },

  render() {
		return (
    	<li className='quiz-question'>
    		<div className='quiz-question-text' dangerouslySetInnerHTML={ this.rawHTML() }></div>
		  	<ChoiceList className='quiz-choices' qid={ this.props.qid } choices={ this.props.choices } onChange={ this.handleChange } />
			</li>
		);
	}
});

module.exports = connect()(Question);
