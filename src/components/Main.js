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
			skills: [],
			work: [
				{
					id: uniqid(),
					role: "",
					company: "",
					startWorkYear: "",
					endWorkYear: "",
				},
			],
			education: [],
			skillTemplate: "",
			educationTemplate: {
				id: uniqid(),
				school: "",
				degree: "",
				startEduYear: "",
				endEduYear: "",
			},
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

	handleChangeEducation = (e) => {
		let educationTemplate = { ...this.state.educationTemplate };
		educationTemplate[`${e.target.id}`] = e.target.value;
		this.setState({
			educationTemplate,
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

	handleChangeSkills = (e) => {
		this.setState({
			skillTemplate: e.target.value,
		});
	};

	onSubmitEducation = (e) => {
		e.preventDefault();
		this.setState({
			education: this.state.education.concat(
				this.state.educationTemplate
			),
			educationTemplate: {
				school: "",
				degree: "",
				startEduYear: "",
				endEduYear: "",
			},
		});
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
		this.setState({
			skills: this.state.skills.concat(this.state.skillTemplate),
			skillTemplate: "",
		});
	};

	render() {
		return (
			<div>
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
				/>
				<Preview info={this.state} />
				<img src={this.state.personalInfo.photo} />
			</div>
		);
	}
}
