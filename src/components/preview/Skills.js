import React from "react";
import SkillsItem from "./SkillsItem";

export default function Skills(props) {
	let skillsItems = props.skills.map((skillsItem) => (
		<SkillsItem skillsItem={skillsItem} />
	));

	return (
		<div>
			<h3 className="heading-white">Skills</h3>
			<ul>{skillsItems}</ul>
		</div>
	);
}
