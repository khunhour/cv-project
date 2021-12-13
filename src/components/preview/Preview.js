import React from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Photo from "./Photo";

export default function Preview({ info }) {
	return (
		<div>
			<Photo photo={info.photo} />
			<Banner personalInfo={info.personalInfo} />
			<Contacts contacts={info.contacts} />
			<AboutMe personalInfo={info.personalInfo} />
		</div>
	);
}
