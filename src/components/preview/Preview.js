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
		<div className="preview">
			<div className="upper-left">
				<Photo photo={info.photo} />
			</div>
			<div className="upper-right">
				<Banner personalInfo={info.personalInfo} />
			</div>
			<div className="lower-left">
				<AboutMe personalInfo={info.personalInfo} />
				<Contacts contacts={info.contacts} />
				<Skills skills={info.skills} />
			</div>
			<div className="lower-right">
				<Education education={info.education} />
				<Work work={info.work} />
			</div>
		</div>
	);
}
