import React from "react";
import WorkInput from "./WorkInput";

export default function WorkForm({ work, onChange, onSubmit, onDelete }) {
	const workItems = work.map((workItem) => (
		<WorkInput
			key={workItem.id}
			workItem={workItem}
			onChange={onChange}
			onDelete={onDelete}
		/>
	));
	return (
		<form id="workForm" onSubmit={onSubmit}>
			<h3 className="heading">Work Experience</h3>
			{workItems}
			<button className="addBtn" type="submit">Add Work Experience</button>
		</form>
	);
}
