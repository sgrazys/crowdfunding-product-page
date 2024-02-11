import './NavigationLinks.css';
import NavigationLink from './NavigationLink';

const navLinks = ['About', 'Discover', 'Get Started'];

function NavigationLinks() {
	return (
		<ul className='nav_links_container dsktp mobile'>
			{navLinks.map((name) => (
				<NavigationLink name={name} />
			))}
		</ul>
	);
}

export default NavigationLinks;
