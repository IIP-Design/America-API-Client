// const React = require('react');
// const { string, func } = React.PropTypes;

// const FormSelect = (props) => {
//     return (
//        <label htmlFor={ props.id }>
// 					<input
// 						id={ props.id }
// 						value={ props.id }
// 						name={ props.name }
// 						type={ props.type }
// 						onChange={ props.onChange }
// 						/>
// 					{ props.label }
// 				</label>
//     );
// };

// FormSelect.propTypes = {
// 	id: string,
// 	name: string,
// 	label: string,
// 	type: string,
// 	onChange: func
// }

// module.exports = FormSelect;


import React from 'react';
const { string, func } = React.PropTypes;

const FormSelect = React.createClass({
	propTypes: {
	  id: string,
		name: string,
		label: string,
		type: string,
		onChange: func
  },

  shouldComponentUpdate (nextProps, nextState) {
  	console.log('should update');
  	return false;
  },

  shouldComponentUpdate (nextProps, nextState) {
  	console.log(this.id)
  	console.dir(nextProps);
  	console.dir(nextState);
  	return false;
  },

  componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps')
		console.dir(nextProps);
  },

	render() {
		const props = this.props;

		return (
       <label htmlFor={ props.id }>
					<input
						id={ props.id }
						value={ props.id }
						name={ props.name }
						type={ props.type }
						onChange={ props.onChange }
						/>
					{ props.label }
				</label>
    );
	}
});

module.exports = FormSelect;
