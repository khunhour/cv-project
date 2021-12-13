import React from "react";

export default function Contacts(props) {
	const { email, address, tel } = props.contacts;
	return (
		<div id="contacts" src="../images">
			<h3 className="heading">Contacts</h3>
			<div className="email">
				<img src=".../images/email.png" alt="email" />
				<div>{email}</div>
			</div>
			<div className="tel">
				<img src=".../images/phone.png" alt="phone" />
				<div>{tel}</div>
			</div>
			<div className="address">
				<img src=".../images/address" alt="address" />
				<div>{address}</div>
			</div>
		</div>
	);
}
