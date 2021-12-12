import React, { Component } from "react";
import ContactsForm from "./ContactsForm";
import EducationForm from "./EducationForm";
import PersonalInfoForm from "./PersonalInfoForm";
export default class CVForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			info,
			onChangePersonalInfo,
			onChangeContacts,
			onChangeEducation,
		} = this.props;
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
				<EducationForm
					education={info.education}
					onChange={onChangeEducation}
				/>
			</div>
		);
	}
}
