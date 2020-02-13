import React, { Component } from "react";

//Stateless Functional Component -> from Programming with Mosh

const NavBar = ({ totalPoints }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Raptor's Score:{" "}
				<span className="badge.badge-pill badge-secondary">{totalPoints}</span>
			</a>
		</nav>
	);
};

export default NavBar;
