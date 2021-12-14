import React from "react";

export default function SkillInput({ skillItem, onChange }) {
	const { id, skill } = skillItem;
	return (
		<>
			<input
				name="skill"
				type="text"
				placeholder="skill"
				value={skill}
				onChange={(e) => onChange(e, id)}
			/>
		</>
	);
}
