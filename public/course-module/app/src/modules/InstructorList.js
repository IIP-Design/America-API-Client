const React       = require('react');
const MediaObject = require('./components/MediaObject');

const InstructorList = React.createClass({
  propTypes: {
    instructors: React.PropTypes.array
  },

  render: function() {
    const instructors = this.props.instructors.map(function(instructor) {
      return (
        <MediaObject key={ instructor.id } tag={ 'h4' } link={ '/instructors/' + instructor.slug } { ...instructor } />
      );
    });
    return (
      <section className="instructors-list">
        <header>
          <h3>Instructors</h3>
        </header>
        { instructors }
      </section>
    );
  }
});

module.exports = InstructorList;
