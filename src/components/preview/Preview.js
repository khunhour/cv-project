import React from "react";
import Banner from "./Banner";

export default function Preview({ info }) {
	return (
		<div>
			<Banner personalInfo={info.personalInfo} />
		</div>
	);
}
