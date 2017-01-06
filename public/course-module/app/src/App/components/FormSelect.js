import React from 'react';

const { string, func } = React.PropTypes;


/*
 * A generic form input component
 *
 * @since 1.0.0
 */

const FormSelect = React.createClass({
	propTypes: {
	  id: string,
		name: string,
		label: string,
		type: string,
		onChange: func
  },


  shouldComponentUpdate(nextProps, nextState) {
  	return false;
  },


  shouldComponentUpdate(nextProps, nextState) {
  	return false;
  },


	render() {
		const props = this.props;

		return (
      <label htmlFor={ props.id }>
			  <input id={ props.id } value={ props.id } name={ props.name } type={ props.type } onChange={ props.onChange }/>
			  { props.label }
			</label>
    );
	}
});

export default FormSelect;

