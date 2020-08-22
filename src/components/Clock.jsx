import React from "react";
import "./styles/clock.css";

const Clock = (props) => {
	return (
		<div className="Base">
			<p className="number0 number">0</p>
			<div className="number15 number">
				<p className="test">15</p>
			</div>
			<div className="number30 number">
				<p className="test">30</p>
			</div>
			<div className="number45 number">
				<p className="test">45</p>
			</div>
			<div className="centerCircle"></div>
			<div
				className="Hand"
				style={{
					transform: `translate(-50%, -100%) rotate(${
						props.initialTurn - props.turn * 0.1
					}deg)`,
				}}
			></div>
			<div
				className="SecondHand"
				style={{
					transform: `translate(-50%, -100%) rotate(${props.turn * -6}deg)`,
				}}
			></div>
		</div>
	);
};

export default Clock;
