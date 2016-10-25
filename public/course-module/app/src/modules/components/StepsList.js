const React = require('react');
const Step  = require('./Step');

const StepsList = React.createClass({
  render: function() {
    return (
      <section className="steps-list">
        <ul>
          <Step className="steps-list__first" title="Take All Lessons">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Step>
          <Step className="steps-list__second" title="Pass the Quiz">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Step>
          <Step className="steps-list__third" title="Get Your Certificate">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Step>
        </ul>
      </section>
    );
  }
});

module.exports = StepsList;
