import { placeholder } from "@babel/types";
import React, { Component } from "react";
import InputText from "./InputText";

export default class PersonalInfoForm extends Component {
	constructor() {
		super();
	}

	// handleChange = (e) => {
	//   this.setState
	// }

	render() {
		const { personalInfo } = this.props;
		return (
			<div id="personalInfo">
				<h2>Personal Information</h2>
				<InputText personalInfo={personalInfo} />
			</div>
		);
	}
}
