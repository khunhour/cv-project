import React from "react";

export default function EducationInput({ educationItem, onChange }) {
	const { id, school, degree, startEduYear, endEduYear } = educationItem;
	return (
		<div>
			<input
				name="school"
				type="text"
				placeholder="School or University"
				value={school}
				onChange={(e) => onChange(e, id)}
			/>
			<input
				name="degree"
				type="text"
				placeholder="Degree"
				value={degree}
				onChange={(e) => onChange(e, id)}
			/>
			<input
				name="startEduYear"
				type="number"
				placeholder="Start Year"
				value={startEduYear}
				onChange={(e) => onChange(e, id)}
			/>
			<input
				name="endEduYear"
				type="number"
				placeholder="End Year"
				value={endEduYear}
				onChange={(e) => onChange(e, id)}
			/>
		</div>
	);
}
