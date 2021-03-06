import React, { Component } from "react";
import ContactsForm from "./ContactsForm";
import EducationForm from "./EducationForm";
import PersonalInfoForm from "./PersonalInfoForm";
import SkillsForm from "./SkillsForm";
import WorkForm from "./WorkForm";

export default class CVForm extends Component {
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
			onDeleteEducation,
			onDeleteWork,
			onDeleteSkills,
		} = this.props;

		return (
			<div className="CV-form">
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
					onDelete={onDeleteEducation}
				/>
				<WorkForm
					work={info.work}
					onChange={onChangeWork}
					onSubmit={onSubmitWork}
					onDelete={onDeleteWork}
				/>
				<SkillsForm
					skills={info.skills}
					onChange={onChangeSkills}
					onSubmit={onSubmitSkills}
					onDelete={onDeleteSkills}
				/>
			</div>
		);
	}
}
