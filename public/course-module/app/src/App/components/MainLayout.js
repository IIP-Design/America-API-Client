import React from 'react';

require('./stylesheets/MainLayout.scss');

const { object } = React.PropTypes;


/*
 * The component that provides much of the global styles.
 *
 * @todo: This spinner does not work
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const MainLayout = (props) => (
  <div className="app">
    <div className={ props.isFetching ? 'show spinner' : 'hide' }><img src="//s3.amazonaws.com/staticcourses.america.gov/uploads/sites/2/2016/11/ripple.gif" /></div>
    <div className={ props.isFetching ? 'hide' : 'show' }>
      <main>
        { props.children }
      </main>
    </div>
  </div>
);


MainLayout.propTypes = {
  children: object
};


export default MainLayout;

