import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

export default function Navbar() {
	const [openLinks, setOpenLinks] = useState(false);

	const toggleNavbar = () => {
		setOpenLinks(!openLinks);
	};

	return (
		<>
			<a href="#main" className="skip-to-content">
				Skip to content
			</a>
			<header className="primary-header flex">
				<div>
					<img src={logo} alt="space tourism logo" className="logo" />
				</div>
				<button
					className={`mobile-nav-toggle ${openLinks ? "close" : "open"}`}
					aria-controls="primary-navigation"
					onClick={toggleNavbar}
				>
					{/* only visible for screen readers */}
					<span aria-expanded={!openLinks} className="sr-only">
						Menu
					</span>
				</button>
				<nav className="navbar ">
					<ul
						className={`primary-navigation flex ${openLinks ? "" : "hidden"}`}
					>
					
					
					
						<li>
							<NavLink
								to="/tourism"
								className={`${(isActive) =>
									isActive
										? "active"
										: ""} ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
							>
								<span aria-hidden="true">01</span>tourism
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
