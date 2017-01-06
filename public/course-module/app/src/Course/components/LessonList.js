import React from 'react';
import { Link } from 'react-router';
import { sprintf } from 'sprintf-js';
import { MediaObject } from 'App';

require('./stylesheets/LessonList.scss');


const { array } = React.PropTypes;


/*
 * The LessonList component
 *
 * @since 1.0.0
 */

const LessonList = React.createClass({
  propTypes: {
    lessons: array
  },


  render() {
    const lessons = this.props.lessons.map((lesson) => {
      const link  = sprintf('%s', lesson.slug );

      return (
        <li className='lessons-list-item' key={ lesson.id }>
          <MediaObject  tag={ 'h3' } link={ `lesson/${ link }` } { ...lesson } />
          <Link to={ `lesson/${ link }` } id={ link }>Take Lesson</Link>
        </li>
      );
    });

    return (
      <section className='lessons-list'>
        <header>
          <h3>Course Lessons</h3>
        </header>
        <ol className='lessons-list__ordered'>
          { lessons }
        </ol>
      </section>
    );
  }
});

export default LessonList;

