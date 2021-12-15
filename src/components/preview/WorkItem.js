import React from "react";

export default function WorkItem({ workItem }) {
	const { role, company, startWorkYear, endWorkYear } = workItem;

	return (
		<div className="group-box">
			<div className="upper-box">{role}</div>
			<div className="middle-box">{company}</div>
			<div className="lower-box">
				{startWorkYear}~{endWorkYear}
			</div>
		</div>
	);
}
