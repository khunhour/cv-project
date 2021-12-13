import React from "react";

export default function PersonalInfoForm({ personalInfo, onChange }) {
	const { firstName, lastName, title, description, photo } = personalInfo;
	return (
		<div id="personalInfoForm">
			<h3>Personal Information</h3>
			<input
				id="firstName"
				type="text"
				placeholder="First Name"
				value={firstName}
				onChange={onChange}
			/>
			<input
				id="lastName"
				type="text"
				placeholder="Last Name"
				value={lastName}
				onChange={onChange}
			/>
			<input
				id="title"
				type="text"
				placeholder="Title"
				value={title}
				onChange={onChange}
			/>
			<input
				id="photo"
				type="file"
				placeholder="Add A Photo"
				value={photo}
				onChange={onChange}
			/>
			<input
				id="description"
				type="text"
				placeholder="Description"
				value={description}
				onChange={onChange}
			/>
		</div>
	);
}
