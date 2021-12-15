import React from "react";
import WorkItem from "./WorkItem";

export default function Work(props) {
	const workItems = props.work.map((workItem) => (
		<WorkItem workItem={workItem} />
	));

	return (
		<div>
			<h3 className="heading">Work Experience</h3>
			<div>{workItems}</div>
		</div>
	);
}
