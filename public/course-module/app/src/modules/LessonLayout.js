const React = require('react');


const LessonLayout = React.createClass({
  render: function() {
    return (
      <div>
        <p>LessonLayout</p>
        { this.props.children }
      </div>
    );
  }
});

module.exports = LessonLayout;
