const React = require('react');
const { Link } = require('react-router');

const Button = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    link: React.PropTypes.string,
    buttonType: React.PropTypes.string
  },

  render: function() {
    if (this.props.link) {
      return (
        <div>
          <Link to={ this.props.link }>
            <input type={ this.props.buttonType } value={ this.props.value } />
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
