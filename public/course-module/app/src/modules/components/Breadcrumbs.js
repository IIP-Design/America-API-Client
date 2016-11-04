const React = require('react');
const { Link } = require('react-router');
const {string, object } = React.PropTypes;

const Breadcrumbs = (props) => {
    return (
       <div>
				 <Link to='/'>{ props.courseTitle }</Link>
				 <span> > </span>
				 <Link>{ props.name }</Link>
			</div>
    );
};

Breadcrumbs.propTypes = {
  courseTitle: string,
		name: string
}

module.exports = Breadcrumbs;
