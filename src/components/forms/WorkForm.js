import React from "react";

export default function workForm({
	role,
	company,
	startWorkYear,
	endWorkYear,
	onChange,
}) {
	return (
		<div id="workForm">
			<h3>Work Experience</h3>
			<input
				id="role"
				type="text"
				placeholder="Role"
				value={role}
				onChange={onChange}
			/>
			<input
				id="company"
				type="text"
				placeholder="Company's Name"
				value={company}
				onChange={onChange}
			/>
			<input
				id="startWorkYear"
				type="text"
				placeholder="Start Year"
				value={startWorkYear}
				onChange={onChange}
			/>
			<input
				id="endWorkYear"
				type="text"
				placeholder="End Year"
				value={endWorkYear}
				onChange={onChange}
			/>
		</div>
	);
}
