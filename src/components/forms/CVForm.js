import React, { Component } from "react";
import ContactsForm from "./ContactsForm";
import EducationForm from "./EducationForm";
import PersonalInfoForm from "./PersonalInfoForm";
import SkillsForm from "./SkillsForm";
import WorkForm from "./WorkForm";
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
			onChangeWork,
			onChangeSkills,
			onSubmitEducation,
			onSubmitSkills,
			onSubmitWork,
		} = this.props;
		return (
			<div>
				<PersonalInfoForm
					personalInfo={info.personalInfo}
					onChange={onChangePersonalInfo}
				/>
				<ContactsForm
					contacts={info.contacts}
					onChange={onChangeContacts}
				/>
				<EducationForm
					education={info.educationTemplate}
					onChange={onChangeEducation}
					onSubmit={onSubmitEducation}
				/>
				<WorkForm
					work={info.workTemplate}
					onChange={onChangeWork}
					onSubmit={onSubmitWork}
				/>
				<SkillsForm
					skills={info.skillTemplate}
					onChange={onChangeSkills}
					onSubmit={onSubmitSkills}
				/>
			</div>
		);
	}
}
