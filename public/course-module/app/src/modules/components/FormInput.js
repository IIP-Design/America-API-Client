const React = require('react');
const { string } = React.PropTypes;

const FormInput = (props) => {
    return (
    	<div className='form-group'>
	       <label className='form-label' htmlFor={ props.id }>{ props.label }</label>
	       <input 
							id={ props.id } 
							name={ props.name } 
							type={ props.type } />
			</div>
    );
};

FormInput.propTypes = {
	id: string,  
	name: string,
	label: string,
	type: string
}

module.exports = FormInput;