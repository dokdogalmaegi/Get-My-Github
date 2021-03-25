import React, { Component } from 'react';
import { Input, Button, TextField } from '@material-ui/core';

export interface FormState {

}

class Form extends Component<any, FormState> {
	render() {
		return (
			<form action="localhost:3000" style={{padding : '10px 15px'}}>
				<TextField label="Test Text" fullWidth />
				<Button variant="contained" style={{float : 'right', marginTop : '10px'}}>Test Button</Button>
			</form>
		);
	}
}

export default Form;
