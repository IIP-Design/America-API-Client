const React = require('react');

require('./Step.scss');

const Step = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    title: React.PropTypes.string,
    children: React.PropTypes.string
  },

  render: function() {
    return (
      <li className={ this.props.className }><span className="step-title">{ this.props.title }</span><span className="step-description">{ this.props.children }</span></li>
    );
  }
});

module.exports = Step;
