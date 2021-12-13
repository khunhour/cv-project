import React from "react";

export default function Description({ description}) {
	return (
		<div >
            <h3 className="heading">Contacts</h3>
            <div>{description}</div>
		</div>
	);
}