import React from "react";

export default function SkillsForm({
	skills,
	skillTemplate,
	onChange,
	onSubmit,
}) {
	return (
		<form id="skillsForm" onSubmit={onSubmit}>
			<h3>Skills</h3>
			<input
				id="skill"
				type="text"
				placeholder="skill"
				value={skillTemplate}
				onChange={onChange}
			/>
			<button type="submit">Add Skill</button>
		</form>
	);
}
