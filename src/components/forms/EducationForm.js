import React from "react";
import EducationInput from "./EducationInput";

export default function EducationForm({
	education,
	onChange,
	onSubmit,
	onDelete,
}) {
	const educationItems = education.map((educationItem) => (
		<EducationInput
			key={educationItem.id}
			educationItem={educationItem}
			onChange={onChange}
			onDelete={onDelete}
		/>
	));

	return (
		<form id="educationForm" onSubmit={onSubmit}>
			<h3 className="heading">Education</h3>
			{educationItems}
			<button className="addBtn" type="submit">Add Education</button>
		</form>
	);
}
