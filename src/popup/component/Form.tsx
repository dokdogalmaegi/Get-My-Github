import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

export interface FormState {
	url : string
}

class Form extends Component<any, FormState> {

	constructor (props) {
		super(props);

		this.state = { url : '' };
	}

	handleUrl = (e) => {
		const originalUrl = 'https://api.github.com/users/'

		this.setState({
			url : `${originalUrl}${e.target.value}`
		})		
	}

	

	render() {
		const { handleUrl } = this;
		const { getResult } = this.props;
		const { url } = this.state;

		return (
			<form action={url} style={{padding : '10px 15px'}} onSubmit={(e) => {
				getResult(url);
				e.preventDefault();
				}} >
				<TextField label="Your Github Id" fullWidth onChange={handleUrl} />
				<Button type='submit' variant="contained" style={{float : 'right', marginTop : '10px'}}>Search</Button>
			</form>
		);
	}
}

export default Form;
