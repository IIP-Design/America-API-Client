import React from 'react';
import { forEach } from 'lodash';
import shortid from 'shortid';

import Question from '../components/Question';


const { array } = React.PropTypes;


/*
 * The QuestionList component.
 *
 * @todo Do we want to pass the choices, questionId all the way down from this component?
 *
 * @since 1.0.0
 */

const QuestionList = React.createClass({
	propTypes: {
    questions: array,
  },


  shouldComponentUpdate(nextProps) {
  	return false;
  },


  /*
   * Note: Sending questionId as Question cannot access key.  We need the questionId to construct common group name for each choice
   */

  renderQuestion(question) {
    const choices = question.choices;

    return (
    	<Question
    		key={ shortid.generate() }
    		questionId={ question.id }
    		text={ question.text }
    		choices={ choices }
    	/>
    )
  },


	render() {
    const props = this.props;

		return (
			<ol id="questionList" className='quiz-questions'>
        { props.questions.map(this.renderQuestion) }
      </ol>
		);
	}
});


export default QuestionList;

