const React           = require('react');
const LessonList      = require('./LessonList');
const InstructorList  = require('./InstructorList');
const StepsList       = require('./components/StepsList');
const Image           = require('./components/Image');
const _               = require('lodash');

require('../stylesheets/modules/Course.scss');

const Course = React.createClass({
  // Temporary for loading data from a file
  getInitialState: function() {
    const data = require('../courses.js');
    const course = this.getCourse(data);

    return { data: course };
  },


  // Temporary for loading courseId from localStorage
  getCourse: function(courses) {
    const course = courses.filter(function(course) {
      return (Number(course.id) === Number(localStorage.getItem('courseId')));
    }, this);

    return course[0];
  },


  getInstructors: function() {
    const instructors = [];

    // Loop through the lessons, push instructor to instructors Array if not already there
    this.state.data.lessons.forEach(function(lesson) {
      lesson.instructors.forEach(function(instructor) {
          instructors.push(instructor);
      });
    });

    return _.uniqBy(instructors, 'id');
  },


  rawDescription: function() {
    return { __html: this.state.data.description };
  },


  render: function() {
    const lessons = this.state.data.lessons;

    return (
      <div>
        <section className='course-intro'>
          <div className='course-intro-feature'>
            <div className='course-intro-image'>
              <Image { ...this.state.data.image } />
              <div className='course-intro-gradient'></div>
            </div>
            <div className='course-intro-text'>
              <h1>{ this.state.data.title }</h1>
              <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
            </div>
          </div>
        </section>
        <StepsList />
        <LessonList lessons={ lessons } />
        <InstructorList instructors={ this.getInstructors() } />
      </div>
    );
  }
});

module.exports = Course;
