import React from "react";

export default function SkillsItem({ skillsItem }) {
	const { skill } = skillsItem;

	return <li>{skill}</li>;
}
