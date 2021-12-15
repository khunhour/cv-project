import React from "react";

export default function Banner(props) {
	const { firstName, lastName, title } = props.personalInfo;
	return (
		<div id="banner">
			<h1>
				{firstName} {lastName}
			</h1>
			<h3>{title}</h3>
		</div>
	);
}
