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
					education={info.educationTemplate}
					onChange={onChangeEducation}
				/>
				<WorkForm work={info.workTemplate} onChange={onChangeWork} />
				<SkillsForm
					skills={info.skillTemplate}
					onChange={onChangeSkills}
				/>
			</div>
		);
	}
}
