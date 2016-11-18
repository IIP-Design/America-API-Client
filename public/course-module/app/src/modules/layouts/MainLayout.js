const React = require('react')

require('../../stylesheets/modules/MainLayout.scss');

const MainLayout = (props) => {
    return (
      <div className="app">
        <div className={props.isFetching ? 'show spinner' : 'hide'}><img src="//s3.amazonaws.com/staticcourses.america.gov/uploads/sites/2/2016/11/ripple.gif" /></div>
        <div className={props.isFetching ? 'hide' : 'show'}>
          <main>
            {props.children}
          </main>
        </div>
      </div>
    );
};

const { object } = React.PropTypes;

MainLayout.propTypes = {
  children: object
}

module.exports = MainLayout;
