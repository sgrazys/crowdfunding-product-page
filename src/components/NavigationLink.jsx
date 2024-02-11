import './NavigationLink.css';

function NavigationLink({ name }) {
	return (
		<li className='nav_item mobile'>
			<button
				className='nav_link'
				href='#'>
				{name}
			</button>
		</li>
	);
}

export default NavigationLink;
