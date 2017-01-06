import React from 'react'

const { object } = React.PropTypes;


/*
 * The Instructor component.
 *
 * @since 1.0.0
 */

const Instructor = React.createClass({
  propTypes: {
    instructor: object
  },


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0,0);
  },


  rawDescription() {
    return { __html: this.props.instructor.description };
  },


  render() {
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


export default Instructor;

