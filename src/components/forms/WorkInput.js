import React from "react";

export default function WorkInput({ workItem, onChange, onDelete }) {
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
				type="number"
				placeholder="Start Year"
				value={startWorkYear}
				onChange={(e) => onChange(e, id)}
			/>
			<input
				name="endWorkYear"
				type="number"
				placeholder="End Year"
				value={endWorkYear}
				onChange={(e) => onChange(e, id)}
			/>
			<button className="deleteBtn" onClick={() => onDelete(id)}>
				Delete Work Experience
			</button>
		</>
	);
}
