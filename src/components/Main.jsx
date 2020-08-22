import React, { useState } from "react";
import Timer from "./Timer";
import DisplayButton from "./DisplayButton";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Test from "./Test/Test";

const Main = () => {
	const [seconds, setSeconds] = useState("0");

	const handleClick = (val) => {
		setSeconds(val);
	};
	return (
		<Container>
			<Navbar bg="transprant" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="d-flex-md justify-content-between w-100">
						<Nav.Link onClick={() => handleClick(25)}>
							<DisplayButton text="Work Time" clas="small"></DisplayButton>
						</Nav.Link>

						<Nav.Link onClick={() => handleClick(5)}>
							<DisplayButton text="Short Break" clas="small"></DisplayButton>
						</Nav.Link>
						<Nav.Link onClick={() => handleClick(15)}>
							<DisplayButton text="Long Break" clas="small"></DisplayButton>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* <Row>
				<Col md={4} }>
					<DisplayButton text="Work Time" class="small"></DisplayButton>
				</Col>
				<Col md={4} onClick={() => handleClick(5)}>
					<DisplayButton text="Short Break" class="small"></DisplayButton>
				</Col>
				<Col md={4} onClick={() => handleClick(15)}>
					<DisplayButton text="Long Break" class="small"></DisplayButton>
				</Col>
			</Row> */}
			<Row>
				<Col className="d-flex justify-content-center">
					<Timer seconds={seconds}></Timer>
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
