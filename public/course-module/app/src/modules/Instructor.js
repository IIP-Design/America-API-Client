const React = require('react');
const { connect } = require('react-redux');
const _ = require('lodash');

const mapStateToProps = (state, { params: { slug } }) => {
  const instructor = _.find(state.course.instructors, (instructor) => {
    return slug === instructor.slug;
  });

  return { slug, instructor }
};

const Instructor = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },

  rawDescription: function() {
    return { __html: this.props.instructor.description };
  },

  render: function() {
    const props = this.props;

    return (
      <div className='two-thirds first'>
        <h1>{ props.instructor.title }</h1>
        <img src={ props.instructor.image.src } alt={ props.instructor.image.alt } />
        <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
      </div>
    );
  }
});

module.exports = connect(mapStateToProps)(Instructor);
