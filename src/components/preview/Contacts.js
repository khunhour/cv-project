import React from "react";
import emailIcon from "../../images/email.png";
import addressIcon from "../../images/address.png";
import phoneIcon from "../../images/phone.png";

export default function Contacts(props) {
	const { email, address, tel } = props.contacts;
	return (
		<div id="contacts">
			<h3 className="heading">Contacts</h3>
			<div className="email">
				<img src={emailIcon} alt="email" />
				<div>{email}</div>
			</div>
			<div className="tel">
				<img src={phoneIcon} alt="phone" />
				<div>{tel}</div>
			</div>
			<div className="address">
				<img src={addressIcon} alt="address" />
				<div>{address}</div>
			</div>
		</div>
	);
}
