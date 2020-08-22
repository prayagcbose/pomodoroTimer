import React, { useState } from "react";
import { Container, Row, Col, Navbar, NavDropdown, Nav } from "react-bootstrap";
import DisplayButton from "./../DisplayButton";
import Timer from "./../Timer";

function Test() {
	return (
		<Container>
			<Navbar bg="dark" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}

export default Test;
