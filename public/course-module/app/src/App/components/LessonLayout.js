import React from 'react';

require('./stylesheets/LessonLayout.scss');

const { object } = React.PropTypes;


/*
 * The lesson layout component. Mostly supplies styles for the Lesson.
 *
 * @todo: Probably unnecessary. Best to move the styles to the Lesson's constituent components
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const LessonLayout = (props) => (
  <div>
    { props.children }
  </div>
);

LessonLayout.propTypes = {
  children: object
}


export default LessonLayout;

