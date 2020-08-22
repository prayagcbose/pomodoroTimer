import React from "react";
import "./styles/main.css";

const DisplayButton = ({ clas, text }) => {
	return (
		<div className={`button ${clas}`}>
			<p>{text}</p>
		</div>
	);
};

export default DisplayButton;
