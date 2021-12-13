import React from "react";

export default function Contacts({ email, address,tel}) {
	return (
		<div id="contacts">
            <h3 className="heading">Contacts</h3>
            <div className="email">
                <img src=""/>
                <div>{email}</div>
            </div>
            <div className="tel">
                <img src=""/>
                <div>{tel}</div>
            </div>
            <div className="address">
                <img src=""/>
                <div>{address}</div>
            </div>
		</div>
	);
}