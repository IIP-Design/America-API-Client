const React = require('react')

require('../../stylesheets/modules/MainLayout.scss');

const MainLayout = (props) => {
    return (
      <div className="app">
        <main>
          {props.children}
        </main>
      </div>
    );
};

const { object } = React.PropTypes;

MainLayout.propTypes = {
  children: object
}

module.exports = MainLayout;
