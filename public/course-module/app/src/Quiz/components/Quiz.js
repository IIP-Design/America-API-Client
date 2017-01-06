import React from 'react';

import QuizLessons from './QuizLessons';
import QuizForm from '../containers/QuizFormContainer';

require('./stylesheets/Quiz.scss');


const { array, string } = React.PropTypes;


/*
 * The Quiz component.
 *
 * @since 1.0.0
 */

const Quiz = React.createClass({
  propTypes: {
    courseName: string,
    lessons: array,
    questions: array
  },


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0,0);
  },


	render() {
    const props = this.props;

		return (
			<div>
        <h3 className='quiz-instructions'>Answer all questions correctly to get a certificate.</h3>
        <p className='quiz-msg'>Five failed attempts to correctly answer all of the questions will return you to the first lesson.</p>
        <QuizLessons lessons={ props.lessons }/>
        <QuizForm questions={ props.questions } courseName={ props.courseName }/>
      </div>
		);
	}
});


export default Quiz;

