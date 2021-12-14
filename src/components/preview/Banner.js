import React from "react";

export default function Banner(props) {
	const { firstName, lastName, title } = props.personalInfo;
	return (
		<div id="banner">
			<h2>
				{firstName} {lastName}
			</h2>
			<h4>{title}</h4>
		</div>
	);
}
