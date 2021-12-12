import React from "react";

export default function SkillsForm({ skill, onChange }) {
	return (
		<div id="skillsForm">
			<h3>Skills</h3>
			<input
				id="skill"
				type="text"
				placeholder="skill"
				value={skill}
				onChange={onChange}
			/>
		</div>
	);
}
