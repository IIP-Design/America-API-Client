const React = require('react');
const { Link } = require('react-router');
const Image = require('./Image');

const MediaObject = React.createClass({
  propTypes: {
    tag: React.PropTypes.string.isRequired,
    reversed: React.PropTypes.bool,
    link: React.PropTypes.string,
    image: React.PropTypes.object,
    title: React.PropTypes.string,
    description: React.PropTypes.string
  },


  setDescription: function() {
    return { __html: this.props.description };
  },


  render: function() {
    const CustomTag = `${this.props.tag}`;
    const reversed = (this.props.reversed === undefined) ? false : true;

    return (
        <div className={ reversed ? 'media-object reversed' : 'media-object' }>
          <Link to={ this.props.link }>
            <Image media_queries={ this.props.media_queries } { ...this.props.image } />
          </Link>
          <header>
            <Link to={ this.props.link }>
              <CustomTag className='media-object-title'>{ this.props.title }</CustomTag>
            </Link>
          </header>
          <p className='media-object-description' dangerouslySetInnerHTML={ this.setDescription() }></p>
        </div>
    );
  }
});

module.exports = MediaObject;
