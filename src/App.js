import React from "react";
import InputText from "./components/forms/InputText";
import PersonalInfoForm from "./components/forms/PersonalInfoForm";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			personalInfo: [
				{
					placeholder: "First Name",
				},
				{
					placeholder: "Last Name",
				},
				{
					placeholder: "Title",
				},
				{
					placeholder: "Description",
				},
			],
		};
	}

	handleChange = (e) => {
		const target = e.target.parentNode.id;
		this.setState({
			target: {
				text: e.target.value,
			},
		});
	};

	render() {
		const { personalInfo } = this.state;
		return (
			<div>
				<div>hello World</div>
				<PersonalInfoForm personalInfo={personalInfo} />
			</div>
		);
	}
}

export default App;
