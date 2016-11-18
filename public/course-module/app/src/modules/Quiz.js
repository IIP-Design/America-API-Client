const React = require('react');
const { connect } = require('react-redux');
const { Link, hashHistory } = require('react-router');
const FormSelect = require('./components/FormSelect');
const QuestionList = require('./QuestionList');
const { array, object, bool } = React.PropTypes;
const { keys } = require('lodash');
const { Notification } = require('react-notification');

require('../stylesheets/modules/Quiz.scss');

const Quiz = React.createClass({

  propTypes: {
    questions: array,
    userAnswers: array,
    allAnswered: bool
  },

   getInitialState () {
    return {
      allAnswered: true,   // change when radio issue is fixed
      isNotificationActive: false,
      userAnswers: {},
      numAttempts: 0,
      message: 'Please answer all the questions'
    };
  },

  renderLesson (lesson) {
    return (
      <li key={ lesson.slug }><Link to={`lesson/${lesson.slug}`}>{ lesson.title }</Link></li>
    )
  },

	isAllCorrect () {
		let questions = this.props.questions;
		let correct = true;
		let index = 0;
		questions.map((question) => {
			let userAnswer = this.state.userAnswers[index];
			let correctanswer = question.correctAnswers[0];
			if( correctanswer !== userAnswer) {
				correct = false;
			}
			index++;
		});
  	return correct;
  },

  isAllAnswered() {
		return (_.keys(this.state.userAnswers).length === this.props.questions.length);
  },

  toggleNotification() {
    this.setState({
      isNotificationActive: !this.state.isNotificationActive
    })
  },

  generateExitLink (url) {
    const esc = encodeURIComponent;
    let params = {};
    var a;

    try {
      params = { course: this.props.courseName, tokenName: token.name, tokenValue: token.value };
    } catch (e) {
      params = { course: this.props.courseName };
    }

    const query = Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');

    return (function(url) {
      (!a) ? a = document.createElement('a') : a;
      a.href = `${url}?${query}`;
      return a.href;
    })(url);
  },

  goToCertificateScreen() {
    const exitPage = document.getElementById('course-container').dataset.exitPage;
		const url = this.generateExitLink(exitPage);

   	window.location = url;  // need to add nonce and course name
  },

  handleSubmit (e) {
  	e.preventDefault();
    console.log(this.goToCertificateScreen());
		// All questions not answerecd, show notification
		if( !this.isAllAnswered() ) {
				this.setState({ message: 'Please answer all the questions' });
				this.toggleNotification ();
		} else {
			this.goToCertificateScreen();
		}

		// All questions answered correctly, send to cert screen
		// else if ( this.isAllCorrect() )  {
		// 	 this.goToCertificateScreen();
		// }

		// // User got some wrong, if max attempt, redirect to lesson page, else notffy
		// else {
		// 	if( this.state.numAttempts === 5 ) {
		// 		hashHistory.push(`/lesson/${this.props.lessons[0].slug}`);
		// 	} else {
		// 		this.setState({ message: 'Some of your answers are incorrect, please try again' });
		// 		this.toggleNotification ();
		// 		this.setState({  numAttempts: this.state.numAttempts + 1 });
		// 	}
		// }
  },

   /*
  	Get the question number via the id on the clicked radio choice
   */
  getQuestion(id) {
	  const re = /^q(\d)+c(\d)+$/;
		const match = id.match(re);
		return {
			question: match[1],
			answer: match[2]
		}
  },

 /* We are using the component state to store user responses as opposed to the redux store
  due to some weird behaviour with the radio buttons not setting themselves as selected upon dispatch to store
  Not sure the cause, could simple be 'programmer' error :-)
  @todo: Move user responses to store when time permits
  */
  /*
  	Activate submit button if num answers is the same as num questions
  	Ensures all questions have been answered
   */
  updateUserResponse(id) {
  	let response = this.getQuestion(id);
  	let answers = this.state.userAnswers;
  	answers[response.question] = response.answer;

		// if( this.isAllAnswered() ) {
		//	this.setState({
    //   allAnswered: true
  	//	})
		//}
  },

	render () {
		return (
			<div>
        <h3 className='quiz-instructions'>Answer all questions correctly to get a certificate.</h3>
        <div className='quiz-msg'>Five failed attempts to correctly answer all of the questions will return you to the first lesson.</div>
        <h3 className='quiz-lessons'>Lessons included on this quiz:</h3>
        <ul>{ this.props.lessons.map(this.renderLesson) }</ul>
        <form id='formQuiz' onSubmit={ this.handleSubmit }>
	        <div className='quiz-agrmt'>Certificate Agreement <span className='quiz-required'>*</span></div>
					<label htmlFor='certify'>
						<input
		            id='certify'
		            type={'checkbox'}
		            name='certify'
		          />
		          I certify that I have taken all the lessons related to this quiz before obtaining the certificate.
		       </label>
	        <QuestionList questions={ this.props.questions } handleChange={ this.updateUserResponse } />
	        <input type="submit" disabled={ this.state.allAnswered ? false: true }  value="Check Answers" />
        </form>
        <Notification
          isActive={ this.state.isNotificationActive }
          message={ this.state.message }
          action='Dismiss'
          onDismiss={ this.toggleNotification }
          onClick={() =>  this.setState({ isNotificationActive: false })}
        />
      </div>
		);
	}
});


const mapStateToProps = (store) => {
  const quiz = store.quiz;
  return {
  	courseName: store.course.detail.title,
    questions: quiz.questions,
    userAnswers: quiz.userAnswers,
    //allAnswered: true,
    //allAnswered: quiz.questions.length === quiz.userAnswers.length,
    lessons: store.course.lessons
  };
};

module.exports = connect(mapStateToProps)(Quiz);


// TODOs:
// Need to display question type based on question type
// Check for data before rendering or provide a default
// Can the user retry the quiz if they fail or should they go back lesson menu
