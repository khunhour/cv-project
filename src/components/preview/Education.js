import React from "react";
import EducationItem from "./EducationItem";

export default function Education(props) {
	const educationItems = props.education.map((educationItem) => (
		<EducationItem educationItem={educationItem} />
	));

	return (
		<div>
			<h3 className="heading">Education</h3>
			<div>{educationItems}</div>
		</div>
	);
}
