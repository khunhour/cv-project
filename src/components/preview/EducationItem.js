import React from "react";

export default function EducationItem({ educationItem }) {
	const { id, school, degree, startEduYear, endEduYear } = educationItem;

	return (
		<div>
			<div>{degree}</div>
			<div>{school}</div>
			<div>
				{startEduYear}~{endEduYear}
			</div>
		</div>
	);
}
