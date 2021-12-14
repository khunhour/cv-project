import React from "react";
import EducationInput from "./EducationInput";

export default function EducationForm({ education, onChange, onSubmit }) {
	const educationItems = education.map((educationItem) => (
		<EducationInput
			key={educationItem.id}
			educationItem={educationItem}
			onChange={onChange}
		/>
	));

	return (
		<form id="educationForm" onSubmit={onSubmit}>
			<h3>Education</h3>
			{educationItems}
			<button type="submit">Add Education</button>
		</form>
	);
}
