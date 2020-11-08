import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
	//connect the input from formProps from redux-form with renderInput attributes and eventhandlers
	renderInput({ input }) {
		return <input {...input} />;
	}
	render() {
		return (
			<form>
				<Field
					name="title"
					type="text"
					label="Title"
					component={this.renderInput}
				/>
				<Field
					name="description"
					type="text"
					label="Description"
					component={this.renderInput}
				/>
			</form>
		);
	}
}
export default reduxForm({
	form: 'createStream',
})(StreamCreate);
