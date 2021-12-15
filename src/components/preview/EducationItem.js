import React from "react";

export default function EducationItem({ educationItem }) {
	const { school, degree, startEduYear, endEduYear } = educationItem;

	return (
		<div className="group-box">
			<div>{degree}</div>
			<div>{school}</div>
			<div>
				{startEduYear}~{endEduYear}
			</div>
		</div>
	);
}
