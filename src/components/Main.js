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
			work: [
				{
					role: "",
					company: "",
					startYear: "",
					endYear: "",
				},
			],
			education: [
				{
					school: "",
					degree: "",
					startYear: "",
					endYear: "",
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
	render() {
		return (
			<div>
				<CVForm
					info={this.state}
					onChangePersonalInfo={this.handleChangePersonalInfo}
					onChangeContacts={this.handleChangeContacts}
				/>
			</div>
		);
	}
}
