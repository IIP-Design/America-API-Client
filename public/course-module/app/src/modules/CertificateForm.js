const React = require('react');
const FormInput = require('./components/FormInput'); 
const FormSelect = require('./components/FormSelect'); 
const FormDropDown = require('./components/FormDropDown'); 

const countries = [ // hardcoded for now
	'Anguilla',
	'Antigua and Barbuda',
	'Argentina',
	'Aruba',
	'Bahamas, The',
	'Barbados',
	'Belize',
	'Bermuda',
	'Bolivia',
	'Bonaire, Sint Eustatius and Saba',
	'Brazil',
	'British Virgin Islands',
	'Canada',
	'Cayman Islands',
	'Chile',
	'Colombia',
	'Costa Rica',
	'Cuba',
	'Curacao',
	'Dominica',
	'Dominican Republic',
	'Ecuador',
	'El Salvador',
	'Falkland Islands (Islas Malvinas)',
	'French Guiana',
	'Grenada',
	'Guadeloupe',
	'Guatemala',
	'Guyana',
	'Haiti',
	'Honduras',
	'Jamaica',
	'Martinique',
	'Mexico',   
	'Montserrat',
	'Netherlands Antilles',
	'Nicaragua',
	'Panama',
	'Paraguay',
	'Peru',
	'Saint Barthelemy',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Martin',
	'Saint Pierre and Miquelon',
	'Saint Vincent and the Grenadines',
	'Sint Maarten',
	'South Georgia and the South Sandwich Islands',
	'Suriname',
	'Trinidad and Tobago',
	'Turks and Caicos Islands',
	'Uruguay',
	'Venezuela',
	'Other'
]

const CertificateForm = React.createClass({
	render() {
		return (
			<div>
				<h3>Congratulations, You Passed!</h3>
				<div>Complete the form below to get your certificate.</div>
				<form action=''>
					<FormInput 
		    	  id='course' 
		    	  type='text'
		    		name='course'   
		    		label='Course'
		    	/>
		    	<FormInput 
		    	  id='first-name' 
		    	  type='text'
		    		name='first-name'   
		    		label='First (Given Name):'
		    	/>
		    	<FormInput 
		    	  id='last-name' 
		    	  type='text'
		    		name='last-name'   
		    		label='Last (Family Name):'
		    	/>
		    	<FormInput 
		    	  id='full-name' 
		    	  type='text'
		    		name='full-name'   
		    		label='Full name as it should appear on your certificate:'
		    	/>
		    	<FormInput 
		    	  id='email' 
		    	  type='email'
		    		name='email'   
		    		label='Email Address:'
		    	/>
		    	<FormDropDown 
		    	  id='country'
		    		name='country'   
		    		label='Country'
		    		items={ countries }
		    	/>
					<FormSelect 
		    	  id='signup'
		    	  type='checkbox'
		    		name='signup'   
		    		label='Receive "Campaign Name" Updates'
		    	/>
		    	<div><button type='submit'>Submit</button></div>
				</form>
			</div>
		);
	}
});

module.exports = CertificateForm;
