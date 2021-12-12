import React, { Component } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
export default class CVForm extends Component {
	constructor(props) {
		super(props);
	}

	handleChange = (e) => {
		const target = e.target.parentNode.id;
		this.setState({
			target: {
				text: e.target.value,
			},
		});
	};

	render() {
		const { info, onChange } = this.props;
		console.log(this.props);
		return (
			<div>
				<div>hello World</div>
				<PersonalInfoForm
					personalInfo={info.personalInfo}
					onChange={onChange}
				/>
			</div>
		);
	}
}
