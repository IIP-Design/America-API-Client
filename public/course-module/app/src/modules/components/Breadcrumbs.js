const React = require('react');
const { Link } = require('react-router');
const {string, object } = React.PropTypes;

const Breadcrumbs = (props) => {
    return (
       <div className='lesson-breadcrumbs'>
				 <Link to='/'>{ props.courseTitle }</Link>
				 <span> > </span>
				 <span> { props.name }</span>
			</div>
    );
};

Breadcrumbs.propTypes = {
  courseTitle: string,
		name: string
}

module.exports = Breadcrumbs;
