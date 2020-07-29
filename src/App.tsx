import React from "react";
import { Navbar, NavItem, DropdownMenu } from "./components";
import {ReactComponent as PlusIcon} from './icons/plus.svg'
import {ReactComponent as BellIcon} from './icons/bell.svg'
import {ReactComponent as MessengerIcon} from './icons/messenger.svg'
import {ReactComponent as CaretIcon} from './icons/caret.svg'


function App() {
	

	return (
		<Navbar>
			<NavItem icon={<PlusIcon />} />
			<NavItem icon={<BellIcon />} />
			<NavItem icon={<MessengerIcon />} />
			<NavItem icon={<CaretIcon />}>
				<DropdownMenu />
			</NavItem>
			<NavItem icon="😊" />
			<NavItem icon="😊" />
		</Navbar>
	);
}

export default App;
