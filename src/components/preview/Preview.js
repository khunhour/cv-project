import React from "react";
import Banner from "./Banner";
import Contacts from "./Contacts";

export default function Preview({ info }) {
	return (
		<div>
			<Banner personalInfo={info.personalInfo} />
			<Contacts contacts={info.contacts} />
		</div>
	);
}
