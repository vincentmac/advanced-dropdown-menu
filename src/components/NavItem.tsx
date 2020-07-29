import React, { useState } from "react";
import { StyledNavItem } from "./NavItem.styled";

interface NavItemProps {
	icon: any;
}

export const NavItem: React.FC<NavItemProps> = ({ children, icon }) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<StyledNavItem>
			<button className="icon-button" onClick={() => setOpen(!open)}>
				{icon}
			</button>
			{open && children}
		</StyledNavItem>
	);
};

export default NavItem;
