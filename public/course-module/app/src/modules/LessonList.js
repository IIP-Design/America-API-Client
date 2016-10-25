const React = require('react');
const MediaObject = require('./components/MediaObject');
const Button = require('./components/Button');
const Duration = require('./components/Duration');
const { sprintf } = require('sprintf-js');

const LessonList = React.createClass({
  propTypes: {
    lessons: React.PropTypes.array
  },


  render: function() {
    const lessons = this.props.lessons.map(function(lesson) {
      const link  = sprintf('%s', lesson.slug );

      // @todo: Get this programmatically
      const duration = '25min';

      return (
        <li key={ lesson.id }>
          <MediaObject tag={ 'h4' } link={ link } { ...lesson } />
          <Button value={ 'Take Lesson' } link={ link } />
          <Duration duration={ duration } />
        </li>
      );
    });

    return (
      <section className="lessons-list__ordered">
        <header>
          <h3>Course Lessons</h3>
        </header>
        <ol>
          { lessons }
        </ol>
      </section>
    );
  }
});

module.exports = LessonList;
