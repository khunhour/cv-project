import React from "react";

export default function EducationForm({
	school,
	degree,
	startEduYear,
	endEduYear,
	onChange,
}) {
	return (
		<div id="educationForm">
			<h3>Education</h3>
			<input
				id="school"
				type="text"
				placeholder="School or University"
				value={school}
				onChange={onChange}
			/>
			<input
				id="degree"
				type="text"
				placeholder="Degree"
				value={degree}
				onChange={onChange}
			/>
			<input
				id="startEduYear"
				type="number"
				placeholder="Start Year"
				value={startEduYear}
				onChange={onChange}
			/>
			<input
				id="endEduYear"
				type="number"
				placeholder="End Year"
				value={endEduYear}
				onChange={onChange}
			/>
		</div>
	);
}
