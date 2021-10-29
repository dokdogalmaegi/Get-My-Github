import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import ButtonCom from './ButtonCom';

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
		});
	}

	render() {
		const { handleUrl } = this;
		const { getResult, selectLang } = this.props;
		const { url } = this.state;

		return (
			<form action={url} style={{padding : '10px 15px', display : 'flex'}} onSubmit={(e) => {
				getResult(url);
				e.preventDefault();
				}} name='submitForm' >
				<TextField label={ selectLang.inputLabel } fullWidth onChange={handleUrl} />
				<ButtonCom selectLang={selectLang} />
			</form>
		);
	}
}

export default Form;
