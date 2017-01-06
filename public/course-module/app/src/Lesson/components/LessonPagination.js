import React from 'react';
import { Link } from 'react-router';

require('./stylesheets/LessonPagination.scss');

const { array, number } = React.PropTypes;


/*
 * Build the links for pagination
 *
 * @param {Object} lesson - The current lesson
 * @param {Number} index - The current index from looping through the props.lessons array
 * @param {Number} lessonIndex - The index of the current lesson in the array of lessons
 *
 * @return {Object} Link - React Router Link component, wrapped in <li>'s, with appropriate slug
 *
 * @since 1.0.0
 */

const getLinks = (lesson, index, lessonIndex) => {
  const c1ass = ( index === lessonIndex ) ? 'active' : '';
  const slug = lesson.slug;
  const label = index + 1;

  return (
    <li className={ c1ass } key={ index }>
      <Link to={ `lesson/${ slug }` } id={ slug }>{ label }</Link>
    </li>
  );
};




/*
 * The Lesson pagination component
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const LessonPagination = (props) => {
  const links = props.lessons.map((lesson, index) => getLinks(lesson, index, props.lessonIndex));

  return (
    <ul className='lesson-pagination'>
      { links }
    </ul>
  );
};


LessonPagination.propTypes = {
  lessons: array,
  lessonIndex: number
};


export default LessonPagination;

