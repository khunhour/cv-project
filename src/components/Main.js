import React, { Component } from "react";
import CVForm from "./forms/CVForm";

export default class Main extends Component {
	constructor() {
		super();
		this.state = {
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
			work: [],
			education: [],
			workTemplate: {
				role: "",
				company: "",
				startWorkYear: "",
				endWorkYear: "",
			},
			educationTemplate: [
				{
					school: "",
					degree: "",
					startEduYear: "",
					endEduYear: "",
				},
			],
		};
	}

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

	handleChangeWork = (e) => {
		let workTemplate = { ...this.state.workTemplate };
		workTemplate[`${e.target.id}`] = e.target.value;
		this.setState({
			workTemplate,
		});
	};
	render() {
		return (
			<div>
				<CVForm
					info={this.state}
					onChangePersonalInfo={this.handleChangePersonalInfo}
					onChangeContacts={this.handleChangeContacts}
					onChangeEducation={this.handleChangeEducation}
					onChangeWork={this.handleChangeWork}
				/>
			</div>
		);
	}
}
