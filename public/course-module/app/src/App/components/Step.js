import React from 'react';

const { string } = React.PropTypes;


/*
 * A step that leads to getting a certificate.
 *
 * @example "Take All Lessons" from a course main page
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const Step = (props) => (
  <li className={ props.className }><span className="course-step-title">{ props.title }</span><span className="course-step-description">{ props.children }</span></li>
);


Step.propTypes = {
  className: string,
  title: string,
  children: string
}


export default Step;

