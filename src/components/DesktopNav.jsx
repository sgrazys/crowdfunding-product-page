import './DesktopNav.css';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';

function DesktopNav() {
	return (
		<nav className='nav dsktp'>
			<Logo />
			<NavigationLinks />
		</nav>
	);
}

export default DesktopNav;
