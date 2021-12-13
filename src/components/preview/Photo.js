import React from "react";

export default function Photo({ photo}) {
	return (
		<div className="profile-photo">
            <img src={photo} alt="profile photo"/>
		</div>
	);
}