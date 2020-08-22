import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import DisplayButton from "./DisplayButton";

const Timer = (props) => {
	const [turn, setTurn] = useState(0);
	const [initialTurn, setInitialTurn] = useState(0);
	const [secondsLeft, setsecondsLeft] = useState(0);
	// const [seconds, setseconds] = useState("");

	useEffect(() => {
		setsecondsLeft(parseInt(props.seconds) * 60);
		setInitialTurn(parseInt(props.seconds) * 6);
		setTurn(0);
	}, [props.seconds]);

	useEffect(() => {
		const id = setTimeout(() => {
			if (secondsLeft > 0) {
				setsecondsLeft(secondsLeft - 1);
				setTurn(turn + 1);
			}
		}, 1000);
		return () => {
			clearTimeout(id);
		};
	});

	// const onSubmit = (e) => {
	// 	e.preventDefault();
	// 	setsecondsLeft(parseInt(seconds) * 60);
	// 	setInitialTurn(parseInt(seconds) * 6);
	// 	setseconds("");
	// 	setTurn(0);
	// };

	return (
		<div>
			<Clock initialTurn={initialTurn} turn={turn}></Clock>

			<h1>{`${Math.floor(secondsLeft / 60)}   :   ${secondsLeft % 60}`}</h1>
		</div>
	);
};

export default Timer;
