import React from "react";

export default function ContactsForm({ contacts, onChange }) {
	const { email, tel, address } = contacts;
	return (
		<form>
			<h3 className="heading">Contacts</h3>
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
		</form>
	);
}
