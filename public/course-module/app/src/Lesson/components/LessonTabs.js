import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import shortid from 'shortid';

const { string, array } = React.PropTypes;


/*
 * The LessonTabs component.
 *
 * @since 1.0.0
 */

const LessonTabs = React.createClass({
  propTypes: {
    description: string.isRequired,
    transcript: string.isRequired,
    resource: array
  },


  rawDescription() {
    return {  __html: this.props.description };
  },


  rawTranscript() {
    return { __html: this.props.transcript };
  },


  isEmpty(array) {
    return (array.length === 0) ? true : false;
  },


  render() {
    let resources;

    if (this.props.resources !== false) {
      resources = this.props.resources.map((resource) => {
        return (
          <li key={ shortid.generate() }><a href={ resource.src } target='_blank'>{ resource.title }</a></li>
        );
      });
    }

    return (
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Transcript</Tab>
          { this.props.resources === false ? null : <Tab>Lesson Resources</Tab> }
        </TabList>
        <TabPanel>
          <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={ this.rawTranscript() }></div>
        </TabPanel>
        { this.props.resources === false ? null : <TabPanel><ul>{ resources }</ul></TabPanel> }
      </Tabs>
    );
  }
});

export default LessonTabs;

