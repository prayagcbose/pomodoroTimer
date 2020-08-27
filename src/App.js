import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import Main from "./components/Main";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Main></Main>
				<h3 style={{ opacity: ".4", fontSize: "1rem" }}>
					Developed by Prayag C Bose
				</h3>
			</header>
		</div>
	);
}

export default App;
