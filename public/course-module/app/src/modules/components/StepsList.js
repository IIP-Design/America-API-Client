const React = require('react');
const Step  = require('./Step');

require('../../stylesheets/components/StepsList.scss');

const StepsList = React.createClass({
  render: function() {
    return (
      <section>
        <ul className="steps-list">
          <Step className="steps-list__first step" title="Take All Lessons">Watch, listen or read all lessons</Step>
          <Step className="steps-list__second step" title="Pass the Quiz">Answer quiz questions correctly</Step>
          <Step className="steps-list__third step" title="Get Your Certificate">We will email your personalized certificate</Step>
        </ul>
      </section>
    );
  }
});

module.exports = StepsList;
