const React = require('react');
const Accordion = require('aria-accordion');

const Collapse = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.array
  },

  componentDidMount: function() {
    const selectors = { body: '.collapse', trigger: '.trigger' };
    const options = { collapseOthers: true };

    new Accordion.Accordion(selectors, options);
  },

  render: function() {
    return (
      <ul className={ `collapse ${ this.props.className }` } role='tablist'>{ this.props.children }</ul>
    );
  }
});


const CollapseItem = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.array
  },

  render: function() {
    return (
      <li className={ `collapse-item ${ this.props.className }` }>{ this.props.children }</li>
    );
  }
});


const CollapsePanel = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired
  },

  rawDescription: function() {
    return { __html: this.props.description }
  },

  render: function() {
    return(
      <div role='tabpanel' dangerouslySetInnerHTML={ this.rawDescription() }></div>
    );
  }
});


const CollapseTrigger = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.string,
    tag: React.PropTypes.string.isRequired
  },

  render: function() {
    const CustomTag = `${this.props.tag}`;

    return (
      <CustomTag className={ `trigger ${ this.props.className }` } role='tab'>{ this.props.children }</CustomTag>
    );
  }
});


module.exports = {
  Collapse: Collapse,
  CollapseItem: CollapseItem,
  CollapsePanel: CollapsePanel,
  CollapseTrigger: CollapseTrigger
}
