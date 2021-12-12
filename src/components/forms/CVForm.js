import React, { Component } from "react";
import ContactsForm from "./ContactsForm";
import PersonalInfoForm from "./PersonalInfoForm";
export default class CVForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { info, onChangePersonalInfo, onChangeContacts } = this.props;
		console.log(this.props);
		return (
			<div>
				<div>hello World</div>
				<PersonalInfoForm
					personalInfo={info.personalInfo}
					onChange={onChangePersonalInfo}
				/>
				<ContactsForm
					contacts={info.contacts}
					onChange={onChangeContacts}
				/>
			</div>
		);
	}
}
