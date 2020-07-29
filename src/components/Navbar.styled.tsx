import styled from "styled-components";

export const StyledNavbar = styled.nav`
	height: var(--nav-size);
	background-color: var(--bg);
	padding: 0 1rem;
	border-bottom: var(--border);

	ul {
		max-width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-end;
	}
`;
