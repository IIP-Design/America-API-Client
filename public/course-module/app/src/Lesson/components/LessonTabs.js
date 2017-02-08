import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import shortid from 'shortid';

require('./stylesheets/Media.scss');
require('./stylesheets/LessonTabs.scss');

const { string, array, object } = React.PropTypes;


/*
 * The LessonTabs component.
 *
 * @since 1.0.0
 */

const LessonTabs = React.createClass({
  propTypes: {
    description: string.isRequired,
    transcript: string.isRequired,
    transcriptFile: string.isRequired,
    resource: array,
    audio: object
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

  hasProp (obj, prop) {
    if( Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop].length > 0 ) {
      return true;
    }
    return false;
  },

  getResource(resource) {
     let href, fileinfo;

     if (this.hasProp (resource, 'url')) {
        href = resource.url; 
        fileinfo = '';
      } else {
       href = resource.src; 
       fileinfo = `[${resource.src_type}, ${resource.src_size}]`;
      }

      return (
        <li key={ shortid.generate() }><a className='resource-link' href={ href } target='_blank'>{ resource.title }</a><span className='resource-fileinfo'> { fileinfo }</span></li>
      )
  },

  render() {
    let resources, href, fileinfo;

    if (this.props.resources !== false) {
      resources = this.props.resources.map((resource) => {
        return this.getResource(resource);
      });
    }

    return (
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Transcript</Tab>
          { this.props.resources === false ? null : <Tab>Lesson Resources</Tab> }
          { this.hasProp( this.props.audio, 'src') ?  <Tab>Audio</Tab> : null }
        </TabList>
        <TabPanel>
          <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
        </TabPanel>
        <TabPanel>
          <div>
            <p><a href={ this.props.transcriptFile } target="_blank" className="print">Print the transcript</a></p>
            <div dangerouslySetInnerHTML={ this.rawTranscript() }></div>
          </div>
        </TabPanel>
        { this.props.resources === false ? null : <TabPanel><ul>{ resources }</ul></TabPanel> }
        { this.hasProp( this.props.audio, 'src') ?  <TabPanel><audio controls src={ this.props.audio.src } className="course-audio-player"></audio></TabPanel> : null }
      </Tabs>
    );
  }
});

export default LessonTabs;

