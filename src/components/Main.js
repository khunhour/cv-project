import React, { Component } from "react";
import CVForm from "./forms/CVForm";
import Preview from "./preview/Preview";
import uniqid from "uniqid";

export default class Main extends Component {
	constructor() {
		super();
		this.state = {
			photo: "",
			personalInfo: {
				firstName: "",
				lastName: "",
				title: "",
				description: "",
			},
			contacts: {
				email: "",
				tel: "",
				address: "",
			},
			skills: [
				{
					id: uniqid(),
					skill: "",
				},
			],
			work: [
				{
					id: uniqid(),
					role: "",
					company: "",
					startWorkYear: "",
					endWorkYear: "",
				},
			],
			education: [
				{
					id: uniqid(),
					school: "",
					degree: "",
					startEduYear: "",
					endEduYear: "",
				},
			],
		};
	}
	handleChangeImage = (e) => {
		let photo = URL.createObjectURL(e.target.files[0]);
		this.setState({ photo });
	};

	handleChangePersonalInfo = (e) => {
		let personalInfo = { ...this.state.personalInfo };
		personalInfo[`${e.target.id}`] = e.target.value;
		this.setState({ personalInfo });
	};

	handleChangeContacts = (e) => {
		let contacts = { ...this.state.contacts };
		contacts[`${e.target.id}`] = e.target.value;
		this.setState({ contacts });
	};

	handleChangeEducation = (e, id) => {
		const { name, value } = e.target;
		this.setState((prevState) => {
			const newEducation = prevState.education.map((educationItem) => {
				if (educationItem.id === id) {
					return { ...educationItem, [name]: value };
				}
				return educationItem;
			});
			return { ...prevState, education: [...newEducation] };
		});
	};

	handleChangeWork = (e, id) => {
		const { name, value } = e.target;
		this.setState((prevState) => {
			const newWork = prevState.work.map((workItem) => {
				if (workItem.id === id) {
					return { ...workItem, [name]: value };
				}
				return workItem;
			});
			return { ...prevState, work: [...newWork] };
		});
	};

	handleChangeSkills = (e, id) => {
		const { name, value } = e.target;
		this.setState((prevState) => {
			const newSkills = prevState.skills.map((skillItem) => {
				if (skillItem.id === id) {
					return { ...skillItem, [name]: value };
				}
				return skillItem;
			});
			return { ...prevState, skills: [...newSkills] };
		});
	};

	onSubmitEducation = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			education: [
				...prevState.education,
				{
					id: uniqid(),
					school: "",
					degree: "",
					startEduYear: "",
					endEduYear: "",
				},
			],
		}));
	};

	onSubmitWork = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			work: [
				...prevState.work,
				{
					id: uniqid(),
					role: "",
					company: "",
					startWorkYear: "",
					endWorkYear: "",
				},
			],
		}));
	};

	onSubmitSkills = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			skills: [
				...prevState.skills,
				{
					id: uniqid(),
					skill: "",
				},
			],
		}));
	};

	handleDeleteEducation = (id) => {
		this.setState((prevState) => {
			const newEducation = prevState.education.filter(
				(educationItem) => educationItem.id !== id
			);
			return { ...prevState, education: [...newEducation] };
		});
	};

	handleDeleteWork = (id) => {
		this.setState((prevState) => {
			const newWork = prevState.work.filter(
				(workItem) => workItem.id !== id
			);
			return { ...prevState, work: [...newWork] };
		});
	};

	handleDeleteSkills = (id) => {
		this.setState((prevState) => {
			const newSkills = prevState.skills.filter(
				(skillItem) => skillItem.id !== id
			);
			return { ...prevState, skills: [...newSkills] };
		});
	};
	render() {
		return (
			<main>
				<CVForm
					info={this.state}
					onChangePersonalInfo={this.handleChangePersonalInfo}
					onChangeImage={this.handleChangeImage}
					onChangeContacts={this.handleChangeContacts}
					onChangeEducation={this.handleChangeEducation}
					onChangeWork={this.handleChangeWork}
					onChangeSkills={this.handleChangeSkills}
					onSubmitEducation={this.onSubmitEducation}
					onSubmitSkills={this.onSubmitSkills}
					onSubmitWork={this.onSubmitWork}
					onDeleteEducation={this.handleDeleteEducation}
					onDeleteWork={this.handleDeleteWork}
					onDeleteSkills={this.handleDeleteSkills}
				/>
				<Preview info={this.state} />
				<img src={this.state.personalInfo.photo} />
			</main>
		);
	}
}
