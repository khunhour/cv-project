import React from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Education from "./Education";
import Photo from "./Photo";
import Skills from "./Skills";
import Work from "./Work";

export default function Preview({ info }) {
	return (
		<div>
			<Photo photo={info.photo} />
			<Banner personalInfo={info.personalInfo} />
			<AboutMe personalInfo={info.personalInfo} />
			<Contacts contacts={info.contacts} />
			<Education education={info.education} />
			<Work work={info.work} />
			<Skills skills={info.skills} />
		</div>
	);
}
