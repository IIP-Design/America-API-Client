const React = require('react');
const { connect } = require('react-redux');
const YouTube = require('react-youtube').default;
const api = require('../api');
const Breadcrumbs = require('./components/Breadcrumbs');
const Glossary = require('./components/Glossary');
const LessonTabs = require('./components/LessonTabs');
const { Link } = require('react-router');
const findIndex = require('lodash');

const { array, object, string, number } = React.PropTypes;

const Lesson = React.createClass({
  propTypes: {
    params: object,
    courseTitle: string,
    lesson: object,
    lessons: array,
    lessonIndex: number,
    media: object,
    image: object,
    resources: array,
    glossary: array
  },

  // Fetch lesson based on component id
  handleClick: function(e) {
    api.getLesson(e.target.id);
  },

  // Fetch lesson nav link
  getLink: function(index, label) {
    const lessons = this.props.lessons;
    const lessonIndex = this.props.lessonIndex;
    const goToIndex = lessonIndex + index;
    const slug = lessons[goToIndex].slug;

    return (
      <Link to={ `lesson/${slug}` } id={ slug } onClick={ this.handleClick }>{ label }</Link>
    );
  },


  // Assign the correct next/previous/both buttons
  buttonNav: function() {
    const numLessons = this.props.lessons.length - 1;
    const lessons = this.props.lessons;
    const lessonIndex = this.props.lessonIndex;
    const exitPage = document.getElementById('course-container').dataset.exitPage;
		const quizLink = `${location.protocol}//${location.hostname}${exitPage}`;

    if (lessonIndex === numLessons) {
      return (
        <div className='lesson-buttonnav'>
          { this.getLink(-1, 'Previous Lesson') }
          <a href={ quizLink }>Go to Quiz</a>
        </div>
      );
    }

    if (lessonIndex === 0) {
      return (
        <div className='lesson-buttonnav'>
           { this.getLink(1, 'Next Lesson') }
        </div>
      );
    }

    if (lessonIndex !== 0 && lessonIndex !== numLessons) {
      return (
        <div className='lesson-buttonnav'>
          { this.getLink(-1, 'Previous Lesson') }
          { this.getLink(1, 'Next Lesson') }
        </div>
      );
    }
  },

  lessonPagination: function(lesson, index) {
    const cls = ( index === this.props.lessonIndex ) ? 'active' : '';
    const slug = lesson.slug;
    const label = index + 1;

    return (
      <li className={cls} key={ index }>
        <Link to={ `lesson/${slug}` } id={ slug } onClick={ this.handleClick }>{ label }</Link>
      </li>
    );
  },


  // @todo YouTube component needs a responsive wrapper
  // @todo Pull buttonNav out into its own component
  // @todo Pull lessonPagination out into its own component
  render: function() {
    const props = this.props;

    return (
      <div className='lesson'>
        <div className="two-thirds first">
          <h1 className='lesson-title'>{ props.lesson.title }</h1>
          <Breadcrumbs courseTitle={ props.courseTitle} name={ props.lesson.title  }  />
          <div className='lesson-video'>
            <YouTube videoId={ props.video.video_id  } />
          </div>
          <div className='lesson-nav'>
            { this.buttonNav() }
            <ul className='lesson-pagination'>
              { this.props.lessons.map(this.lessonPagination) }
            </ul>
          </div>
          <LessonTabs
            description={ props.lesson.description }
            transcript={ props.media.transcript_text }
            resources={ props.resources }
          />
        </div>
        <div className="one-third">
          <Glossary terms={ props.glossary } />
        </div>
      </div>
    );
  }
});

const mapStateToProps = (store) => {
  const lesson = store.lesson;
  const course = store.course;
  const index = _.findIndex(course.lessons, (o) => {
    return o.id == lesson.detail.id;
  });

  const media = (lesson.media) ? lesson.media : {};
  const video = (lesson.media && lesson.media.video) ? lesson.media.video : {};

  return {
    courseTitle: course.detail.title,
    lessons: course.lessons,
    lesson: lesson.detail,
    lessonIndex: index,
    media: media,
    video:video,
    image: lesson.image,
    resources: lesson.resources || [],  // resources coming in as boolean instead of empty array - this is temp
    glossary: lesson.glossary
  };
};

module.exports = connect(mapStateToProps)(Lesson);
