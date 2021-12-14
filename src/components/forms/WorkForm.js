import React from "react";
import WorkInput from "./WorkInput";

export default function WorkForm({ work, onChange, onSubmit }) {
	const workItems = work.map((workItem) => (
		<WorkInput key={work.id} workItem={workItem} onChange={onChange} />
	));
	return (
		<div>
			<form id="workForm" onSubmit={onSubmit}>
				<h3>Work Experience</h3>
				{workItems}
				<button type="submit">Add Work Experience</button>
			</form>
		</div>
	);
}
