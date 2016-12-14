import React from 'react';
import { Link } from 'react-router';

const { array } = React.PropTypes;


/*
 * The QuizLesson component.
 *
 * @since 2.0.0
 */

const QuizLessons = (props) => {
  const quizLessons = props.lessons.map(lesson => (
    <li key={ lesson.slug }>
      <Link to={ `lesson/${ lesson.slug }` }>
        { lesson.title }
      </Link>
    </li>
  ));

  return (
    <div>
      <h3 className='quiz-lessons'>Lessons included on this quiz:</h3>
      <ul>
        { quizLessons }
      </ul>
    </div>
  );
};


QuizLessons.propTypes = {
  lessons: array
};


export default QuizLessons;

