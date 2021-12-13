import React from "react";

export default function EducationForm({ education, onChange, onSubmit }) {
	const { school, degree, startEduYear, endEduYear } = education;
	return (
		<form id="educationForm" onSubmit={onSubmit}>
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
			<button type="submit">Add Education</button>
		</form>
	);
}
