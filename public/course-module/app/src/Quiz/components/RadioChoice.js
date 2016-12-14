import React from 'react';


const { array, func, number, object, string } = React.PropTypes;


/*
 * The RadioChoice component
 *
 * @param {Object} props - The React props object
 *
 * @since 2.0.0
 */

const RadioChoice = (props) => {
  return (
    <li>
      <label htmlFor={ props.choiceId }>
        <input id={ props.choiceId } name={ props.questionId } type={ 'radio' } checked={ props.checked } onChange={ props.handleChange }/>
        { props.choice.text }
      </label>
    </li>
  );
};


RadioChoice.propTypes = {
  checked: string,
  choice: object,
  handleChange: func,
  choiceId: string,
  questionId: string,
  userAnswers: array
};


export default RadioChoice;

