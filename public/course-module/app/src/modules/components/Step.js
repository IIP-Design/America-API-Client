const React = require('react');

require('./Step.scss');

const Step = (props) => {
    return (
   	  <li className={ props.className }><span className="course-step-title">{ props.title }</span><span className="course-step-description">{ props.children }</span></li>
    );
};

Step.propTypes = {
    className: React.PropTypes.string,
    title: React.PropTypes.string,
    children: React.PropTypes.string
}

module.exports = Step;
