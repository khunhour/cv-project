import React from "react";

export default function WorkItem({ workItem }) {
	const { role, company, startWorkYear, endWorkYear } = workItem;

	return (
		<div>
			<div>{role}</div>
			<div>{company}</div>
			<div>
				{startWorkYear}~{endWorkYear}
			</div>
		</div>
	);
}
