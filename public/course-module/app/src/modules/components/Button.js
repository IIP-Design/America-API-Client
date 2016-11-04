const React = require('react');
const { Link } = require('react-router');

const { string } = React.PropTypes;

const Button = React.createClass({
  propTypes: {
    value: string.isRequired,
    link: string,
    buttonType: string
  },

  render: function() {
    if (this.props.link) {
      return (
        <div className={ this.props.className }>
          <Link to={ this.props.link }>
            <input type={ this.props.buttonType } value={ this.props.value }  />
          </Link>
        </div>
      );
    }

    return (
      <input type={ this.props.buttonType } value={ this.props.value } />
    );
  }
});


Button.defaultProps = { buttonType: 'button' };

module.exports = Button;
