import React from "react";

export default function Photo({ photo }) {
	return (
		<div className="profile-photo">
			profile
			<img src={photo} alt="profile" />
		</div>
	);
}
