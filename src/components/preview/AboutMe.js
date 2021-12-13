import React from "react";

export default function AboutMe({ personalInfo }) {
	return (
		<div>
			<h3 className="heading">About Me</h3>
			<div>{personalInfo.description}</div>
		</div>
	);
}
