import React from "react";

export default function Banner({ firstName, lastName,title}) {
	return (
		<div id="banner">
			<h2>{firstName} {lastName}</h2>
            <h3>{title}</h3>
		</div>
	);
}