import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { StyledDropdown, StyledMenuItem } from "./DropdownMenu.styled";
import { CSSTransition } from "react-transition-group";

interface DropdownItemProps {
	leftIcon?: any;
	rightIcon?: any;
	goToMenu?: string;
}

interface DropdownMenuProps {
	icon?: any;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
	children,
	icon
}) => {
	const [activeMenu, setActiveMenu] = useState<string>("main");
	const [menuHeight, setMenuHeight] = useState<number>();

	const calcHeight = (el: HTMLElement) => {
		const height = el.offsetHeight
		setMenuHeight(height)
	}

	// function calcHeight(el: HTMLElement) {
	// 	const height = el.offsetHeight
	// 	setMenuHeight(height)
	// }

	const DropdownItem: React.FC<DropdownItemProps> = ({
		leftIcon,
		rightIcon,
		goToMenu,
		children
	}) => {
		return (
			<StyledMenuItem onClick={() => goToMenu && setActiveMenu(goToMenu)}>
				<span className="icon-button">{leftIcon}</span>
				{children}
				<span className="icon-right">{rightIcon}</span>
			</StyledMenuItem>
		);
	};

	return (
		<StyledDropdown style={{height: menuHeight}}>
			<CSSTransition
				in={activeMenu === "main"}
				unmountOnExit
				timeout={500}
				classNames="menu-primary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem>My Profile</DropdownItem>
					<DropdownItem
						leftIcon={<CogIcon />}
						rightIcon={<ChevronIcon />}
						goToMenu="settings"
					>
						Settings
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "settings"}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
					<DropdownItem>Settings 0</DropdownItem>
					<DropdownItem>Settings 1</DropdownItem>
					<DropdownItem>Settings 2</DropdownItem>
					<DropdownItem>Settings 3</DropdownItem>
					<DropdownItem>Settings 4</DropdownItem>
					<DropdownItem>Settings 5</DropdownItem>
					<DropdownItem>Settings 6</DropdownItem>
					<DropdownItem>Settings 7</DropdownItem>
					<DropdownItem>Settings 8</DropdownItem>
					<DropdownItem>Settings 9</DropdownItem>
					<DropdownItem>Settings 10</DropdownItem>
				</div>
			</CSSTransition>
		</StyledDropdown>
	);
};

export default DropdownMenu;
