const React = require('react');
const shortid = require('shortid');
const { string, array } = React.PropTypes;

const FormDropDown = (props) => {
		const generateDropDown = () => {
			return props.items.map((item) => {
				return  <option key={ shortid.generate() }>{ item }</option>
			});
		}

    return (
    	<div className='form-drop-down'>
	       <label className='form-label' htmlFor={ props.id }>{ props.label }</label>
	       <select> 
							id={ props.id } 
							name={ props.name } 
							type={ props.type }>
							{ generateDropDown() }
					</select> 
			</div>
    );
};

FormDropDown.propTypes = {
	id: string,  
	name: string,
	label: string,
	items: array
}

module.exports = FormDropDown;