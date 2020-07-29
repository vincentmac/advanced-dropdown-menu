import styled from "styled-components";

export const StyledNavItem = styled.li`
	width: calc(var(--nav-size) * 0.8);
	display: flex;
	align-items: center;
	justify-content: center;

	.icon-button {
		--button-size: calc(var(--nav-size) * 0.5)
		width: var(--button-size);
		height: var(--button-size);
		background-color: #484a4d;
		border-radius: 50%;
		border-width: 0;
		padding: 5px;
		margin: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: filter 300ms;

	}

	button:hover {
		filter: brightness(1.2)
	}

	button svg {
		fill: var(--text-color);
		width: 20px;
		height: 20px;
	}
`;
