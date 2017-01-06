import React from 'react';
import { Link } from 'react-router';


const {string, object } = React.PropTypes;


/*
 * A breadcrumb navigation component
 *
 * @todo Make more generic. Currently too tightly coupled with lessons. Also hardcoded to 2 level depth
 *
 * @param {Object} props - A React props object
 *
 * @return {Object} The generated breadcrumb
 *
 * @since 1.0.0
 */

const Breadcrumbs = (props) => (
  <div className='lesson-breadcrumbs'>
    <Link to='/'>{ props.courseTitle }</Link>
    <span>&nbsp;>&nbsp;</span>
    <span>&nbsp;{ props.name }</span>
  </div>
);

Breadcrumbs.propTypes = {
  courseTitle: string,
  name: string
}


export default Breadcrumbs;

