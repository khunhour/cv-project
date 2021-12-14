import React from "react";
import SkillInput from "./SkillInput";

export default function SkillsForm({ skills, onChange, onSubmit }) {
	const skillItems = skills.map((skillItem) => (
		<SkillInput
			key={skillItem.id}
			skillItem={skillItem}
			onChange={onChange}
		/>
	));
	console.log(skillItems);
	return (
		<form id="skillsForm" onSubmit={onSubmit}>
			<h3>Skills</h3>
			{skillItems}
			<button type="submit">Add Skill</button>
		</form>
	);
}
