const React = require('react');

// @todo: This is currently just a placeholder
const Duration = React.createClass({
  render: function() {
    return (
      <div>
        Duration: { this.props.duration }
      </div>
    );
  }
});

module.exports = Duration;
