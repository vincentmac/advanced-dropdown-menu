import styled from "styled-components";

export const StyledDropdown = styled.div`
	position: absolute;
	top: 58px;
	width: 300px;
	transform: translateX(-45%);
	background-color: var(--bg);
	border: var(--border);
	border-radius: var(--border-radius);
	padding: 1rem;
	overflow: hidden;
	transition: height var(--speed) ease;

	.menu {
		width: 100%;
	}

	.menu-primary-enter {
		position: absolute;
		transform: translateX(-110%);
	}
	
	.menu-primary-enter-active {
		transform: translateX(0%);
		transition: all var(--speed) ease;
	}
	
	.menu-primary-exit {
		position: absolute;
	}
	
	.menu-primary-exit-active {
		transform: translateX(-110%);
		transition: all var(--speed) ease;
	}

	.menu-secondary-enter {
		transform: translateX(110%);
	}
	
	.menu-secondary-enter-active {
		transform: translateX(0%);
		transition: all var(--speed) ease;
	}
	
	.menu-secondary-exit {
	}
	
	.menu-secondary-exit-active {
		transform: translateX(110%);
		transition: all var(--speed) ease;
	}overflow: hidden;
`;

export const StyledMenuItem = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	border-radius: var(--border-radius);
	transition: background var(--speed);
	padding: 0.5rem;
	color: var(--text-color);

	.icon-button {
		margin-right: 0.5rem;
	}
	:hover {
		background-color: #525357;
	}

	svg {
		fill: var(--text-color);
		width: 20px;
		height: 20px;
	}

	.icon-right {
		margin-left: auto;
	}

	span {
	}


`;
