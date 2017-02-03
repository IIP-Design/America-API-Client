import React from 'react';
import { Link } from 'react-router';
import shortid from 'shortid';
import { MediaObject } from 'App'

require('./stylesheets/InstructorList.scss');


/*
 * The InstructorList component
 *
 * @since 1.0.0
 */

const InstructorList = React.createClass({
  propTypes: {
    instructors: React.PropTypes.array
  },


  render() {
    const length = this.props.instructors.length;
    const instructors = this.props.instructors.map((instructor) => {
      const link = `/instructors/${ instructor.slug }`

      // If there are few than 3 instructors, let them take up one-half the container's width. Otherwise, one-third.
      return (
        <div key={ instructor.id } className={ (length < 3) ? 'media-object half' : 'media-object one-third' }>
          <Link to={ link }>
            <img src={ instructor.image.src } alt={ instructor.image.alt } />
          </Link>
          <header>
            <Link to={ link }>
              <h4 className='media-object-title'>{ instructor.title }</h4>
              <h5 className='media-object-subtitle'>{ instructor.salutation }</h5>
            </Link>
          </header>
        </div>
      );
    });

    return (
      <section className="instructors-list">
        <header>
          <h3>{ (length > 1) ? 'Instructors' : 'Instructor' }</h3>
        </header>
        { instructors }
      </section>
    );
  }
});


export default InstructorList;

