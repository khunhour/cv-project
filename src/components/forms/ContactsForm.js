import React from "react";

export default function ContactsForm({ email, tel, address, onChange }) {
	return (
		<div id="contactForm">
			<h3>Contacts</h3>
			<input
				id="email"
				type="email"
				placeholder="Email"
				value={email}
				onChange={onChange}
			/>
			<input
				id="tel"
				type="text"
				placeholder="Phone Number"
				value={tel}
				onChange={onChange}
			/>
			<input
				id="address"
				type="text"
				placeholder="Address"
				value={address}
				onChange={onChange}
			/>
		</div>
	);
}
