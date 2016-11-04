const React = require('react');
const { Tab, Tabs, TabList, TabPanel } = require('react-tabs');
const shortid = require('shortid');

const LessonTabs = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired,
    transcript: React.PropTypes.string.isRequired,
    resource: React.PropTypes.array
  },


  rawDescription: function() {
    return {  __html: this.props.description };
  },


  rawTranscript: function() {
    return { __html: this.props.transcript };
  },


  isEmpty: function(array) {
    return (array.length === 0) ? true : false;
  },


  render: function() {
    const resources = this.props.resources.map(function(resource) {
      return (
        <li key={ shortid.generate() }><a href={ resource.url } >{ resource.title }</a></li>
      );
    });

    // @todo: Use collapse for tabs
    return (
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Transcript</Tab>
          { this.isEmpty(this.props.resources) === true ? null : <Tab>Lesson Resources</Tab> }
        </TabList>
        <TabPanel>
          <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={ this.rawTranscript() }></div>
        </TabPanel>
        { this.isEmpty(this.props.resources) === true ? null : <TabPanel>{ resources }</TabPanel> }
      </Tabs>
    );
  }
});

module.exports = LessonTabs;
