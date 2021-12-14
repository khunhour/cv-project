import React from "react";

export default function WorkInput({ workItem, onChange }) {
	const { id, role, company, startWorkYear, endWorkYear } = workItem;
	return (
		<>
			<input
				name="role"
				type="text"
				placeholder="Role"
				value={role}
				onChange={(e) => onChange(e, id)}
			/>
			<input
				name="company"
				type="text"
				placeholder="Company's Name"
				value={company}
				onChange={(e) => onChange(e, id)}
			/>
			<input
				name="startWorkYear"
				type="text"
				placeholder="Start Year"
				value={startWorkYear}
				onChange={(e) => onChange(e, id)}
			/>
			<input
				name="endWorkYear"
				type="text"
				placeholder="End Year"
				value={endWorkYear}
				onChange={(e) => onChange(e, id)}
			/>
		</>
	);
}