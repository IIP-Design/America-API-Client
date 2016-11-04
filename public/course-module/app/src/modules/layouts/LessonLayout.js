const React = require('react');

require('../../stylesheets/modules/LessonLayout.scss');

const LessonLayout = (props) => {
   return (
      <div>
        { props.children }
      </div>
    );
};

const { object } = React.PropTypes;

LessonLayout.propTypes = {
  children: object
}

module.exports = LessonLayout;
