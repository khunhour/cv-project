import React from "react";

export default function AboutMe({ personalInfo }) {
	return (
		<div>
			<h3 className="heading-white">About Me</h3>
			<div className="about-me">{personalInfo.description}</div>
		</div>
	);
}
