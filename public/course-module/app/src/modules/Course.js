const React           = require('react');
const { connect }     = require('react-redux');
const api             = require('../api');
const LessonList      = require('./LessonList');
const InstructorList  = require('./InstructorList');
const StepsList       = require('./components/StepsList');

require('../stylesheets/modules/Course.scss');

const { object } = React.PropTypes;

const Course = React.createClass({
  propType: function() {
    params: object
  },

  componentDidMount: function() {
    var container = document.getElementById('course-container');
    var id = container.dataset.courseId;
    // if id then else err
    api.getCourse(id);
  },

  rawDescription: function() {
    return { __html: this.props.course.description };
  },

  render: function() {
    let props = this.props;

    return (
      <div>
        <div className={props.isFetching ? 'show' : 'hide'}>Loading...</div>
        <section className='course-intro'>
          <div className='course-intro-feature'>
            <div className='course-intro-image'>
              <img src={ props.course.image.src } alt={ props.course.image.alt } />
              <div className='course-intro-gradient'></div>
            </div>
            <div className='course-intro-text'>
              <h1>{ props.course.title  }</h1>
              <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
            </div>
          </div>
        </section>
        <StepsList />
        <LessonList lessons={ props.lessons } />
        <InstructorList instructors={ props.instructors } />
      </div>
    );
  }
});

const mapStateToProps = (store) => {
  let data = store.course;
  return {
    course: data.detail,
    lessons: data.lessons,
    instructors: data.instructors,
    isFetching: data.isFetching
  };
};

module.exports = connect(mapStateToProps)(Course);
