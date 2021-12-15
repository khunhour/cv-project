import React from "react";

export default function EducationItem({ educationItem }) {
	const { school, degree, startEduYear, endEduYear } = educationItem;

	return (
		<div className="group-box">
			<div className="upper-box">{degree}</div>
			<div className="middle-box">{school}</div>
			<div className="lower-box">
				{startEduYear}~{endEduYear}
			</div>
		</div>
	);
}
