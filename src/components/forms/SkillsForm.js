import React from "react";

export default function SkillsForm({ skill, onChange, onSubmit }) {
	return (
		<form id="skillsForm" onSubmit={onSubmit}>
			<h3>Skills</h3>
			<input
				id="skill"
				type="text"
				placeholder="skill"
				value={skill}
				onChange={onChange}
			/>
			<button type="submit">Add Skill</button>
		</form>
	);
}
