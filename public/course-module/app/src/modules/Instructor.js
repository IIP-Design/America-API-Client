const React = require('react');
const _ = require('lodash');

const Instructor = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },

  // Temp function until ajax requests
  getInitialState: function() {
    const instructor = this.getInstructor();
    return { data: instructor };
  },

  getInstructor: function() {
    const course = this.getThisCourse();
    let instructors = [];

    course.lessons.forEach(function(lesson) {
      lesson.instructors.forEach(function(instructor) {
        if (instructor.slug === this.props.params.slug) {
          instructors.push(instructor);
        }
      }, this);
    }, this);

    instructors = _.uniqBy(instructors, 'id');

    return instructors[0];
  },


  getThisCourse: function() {
    const courseId = localStorage.getItem('courseId');
    const course = this.courses.filter(function(course) {
      return (Number(course.id) === Number(courseId));
    }, this);

    return course[0];
  },


  render: function() {
    return (
      <h2>Instructor: { this.state.data.title }</h2>
    );
  }
});

module.exports = Instructor;
