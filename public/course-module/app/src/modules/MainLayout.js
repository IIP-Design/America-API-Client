const React = require('react');

const MainLayout = React.createClass({
  render: function() {
    return (
      <div>
        <p>MainLayout</p>
        { this.props.children }
      </div>
    );
  }
});

module.exports = MainLayout;
