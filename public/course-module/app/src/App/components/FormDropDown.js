import React from 'react';
import shortid from 'shortid';


const { string, array } = React.PropTypes;


/*
 * Generates a select menu from an array options passed via props.
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const FormDropDown = (props) => {
  const generateDropDown = () => {
    return props.options.map((option) => {
      return  <option key={ shortid.generate() }>{ option }</option>
    });
  }

  return (
    <div className='form-drop-down'>
      <label className='form-label' htmlFor={ props.id }>{ props.label }</label>
      <select id={ props.id } name={ props.name } type={ props.type }>
        { generateDropDown() }
      </select>
    </div>
  );
};


FormDropDown.propTypes = {
	id: string,
	name: string,
	label: string,
	options: array
}


export default FormDropDown;

