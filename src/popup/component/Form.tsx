import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import ButtonCom from './ButtonCom'
import Test from './Test'

export interface FormState {
	url : string,
	test : boolean
}

class Form extends Component<any, FormState> {

	constructor (props) {
		super(props);

		this.state = { url : '', test : false };
	}

	handleUrl = (e) => {
		const originalUrl = 'https://api.github.com/users/'

		this.setState({
			url : `${originalUrl}${e.target.value}`
		})
	}

	testCallback = (success: boolean) => {
		console.log(success);
		
	}

	render() {
		const { handleUrl } = this;
		const { getResult } = this.props;
		const { url } = this.state;

		return (
			<form action={url} style={{padding : '10px 15px', display : 'flex'}} onSubmit={(e) => {
				getResult(url);
				e.preventDefault();
				}} name='submitForm' >
				<TextField label="Your Github Id" fullWidth onChange={handleUrl} />
				<ButtonCom cb={this.testCallback}></ButtonCom>
				{/* <Test /> */}
			</form>
		);
	}
}

export default Form;
