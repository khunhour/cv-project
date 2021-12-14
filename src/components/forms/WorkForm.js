import React from "react";
import WorkInput from "./WorkInput";

export default function WorkForm({ work, onChange, onSubmit }) {
	const workItems = work.map((workItem) => (
		<WorkInput key={workItem.id} workItem={workItem} onChange={onChange} />
	));
	return (
		<form id="workForm" onSubmit={onSubmit}>
			<h3>Work Experience</h3>
			{workItems}
			<button type="submit">Add Work Experience</button>
		</form>
	);
}
