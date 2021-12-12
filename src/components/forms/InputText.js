import { placeholder } from "@babel/types";
import React from "react";

const InputText = (props) => {
	const { personalInfo } = props;
	return (
		<div>
			{personalInfo.map((item) => {
				return (
					<input
						type="text"
						placeholder={item.placeholder}
						value={item.text}
					/>
				);
			})}
		</div>
	);
};

export default InputText;
