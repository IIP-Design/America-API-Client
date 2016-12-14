import React from 'react';
import { Link } from 'react-router';


const { array, number } = React.PropTypes;


/*
 * Build the link to the next/previous lesson
 *
 * @param {Array} lessons - The array of lessons in the current course
 * @param {Number} lessonIndex - The index of the current lesson in the array of lessons
 * @param {Number} index - If "previous lesson" selected, value will be -1. If "next lesson" selected, value will be 1
 * @param {String} label - The linked text
 *
 * @return {Object} Link - React Router Link component with appropriate slug
 *
 * @since 1.0.0
 */

const getLink = (lessons, lessonIndex, index, label) => {
  const goToIndex = lessonIndex + index;
  const slug = lessons[goToIndex].slug;

  return (
    <Link to={ `lesson/${slug}` } id={ slug }>{ label }</Link>
  );
};




/*
 * The next/previous/quiz button navigation on a lesson
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const ButtonNav = (props) => {
  const numLessons = props.lessons.length - 1;
  const lessons = props.lessons;
  const lessonIndex = props.lessonIndex;

  // If the last lesson, display previous and quiz buttons
  if (lessonIndex === numLessons) {
    return (
      <div className='lesson-buttonnav'>
        { getLink(lessons, lessonIndex, -1, 'Previous Lesson') }
        <Link to={ 'quiz' }>Go to Quiz</Link>
      </div>
    );
  }

  // If the first lesson, only display next button
  if (lessonIndex === 0) {
    return (
      <div className='lesson-buttonnav'>
         { getLink(lessons, lessonIndex, 1, 'Next Lesson') }
      </div>
    );
  }

  // Otherwise display both next and previous buttons
  if (lessonIndex !== 0 && lessonIndex !== numLessons) {
    return (
      <div className='lesson-buttonnav'>
        { getLink(lessons, lessonIndex, -1, 'Previous Lesson') }
        { getLink(lessons, lessonIndex, 1, 'Next Lesson') }
      </div>
    );
  }
};


ButtonNav.propTypes = {
  lessons: array,
  lessonIndex: number
};


export default ButtonNav;

