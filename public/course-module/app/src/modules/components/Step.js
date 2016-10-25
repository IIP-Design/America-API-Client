const React = require('react');

const Step = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    title: React.PropTypes.string,
    children: React.PropTypes.string
  },

  render: function() {
    return (
      <li className={ this.props.className }><span className="course-step-title">{ this.props.title }</span><span className="course-step-description">{ this.props.children }</span></li>
    );
  }
});

module.exports = Step;
