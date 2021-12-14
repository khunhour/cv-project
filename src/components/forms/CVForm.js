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
			onChangeImage,
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
					onChangeImage={onChangeImage}
				/>
				<ContactsForm
					contacts={info.contacts}
					onChange={onChangeContacts}
				/>
				<EducationForm
					education={info.education}
					onChange={onChangeEducation}
					onSubmit={onSubmitEducation}
				/>
				<WorkForm
					work={info.work}
					onChange={onChangeWork}
					onSubmit={onSubmitWork}
				/>
				<SkillsForm
					skills={info.skills}
					onChange={onChangeSkills}
					onSubmit={onSubmitSkills}
				/>
			</div>
		);
	}
}
