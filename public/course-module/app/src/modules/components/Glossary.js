const React = require('react');
const { Collapse, CollapseItem, CollapsePanel, CollapseTrigger } = require('./Collapse.js');

const Glossary = React.createClass({
  propTypes: {
    terms: React.PropTypes.array
  },

  render: function() {
    if (this.props.terms.length === 0) {
      return (<div/>);
    }

    const glossary = this.props.terms.map(function(term) {
      return (
        <CollapseItem key={ term.id }>
          <CollapseTrigger tag={ 'p' }>{ term.title }</CollapseTrigger>
          <CollapsePanel description={ term.description } />
        </CollapseItem>
      );
    }, this);

    return (
      <div>
        <h3>Glossary of Terms</h3>
        <Collapse>
          { glossary }
        </Collapse>
      </div>
    );
  }
}, this);

module.exports = Glossary;
