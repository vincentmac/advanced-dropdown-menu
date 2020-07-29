import React from "react";
import { StyledNavbar } from "./Navbar.styled";

export const Navbar: React.FC = ({ children }) => {
	return (
		<StyledNavbar>
			<ul className="navbar-nav">{children}</ul>
		</StyledNavbar>
	);
};

export default Navbar;
