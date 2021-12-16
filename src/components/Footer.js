import React, { Component } from "react";
import githubImg from "../images/github.png";
export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div>2021 &copy; khunhour</div>
				<a href="https://github.com/khunhour/cv-project">
					<img src={githubImg} alt="github" />
				</a>
			</footer>
		);
	}
}
