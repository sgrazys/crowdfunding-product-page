import './Logo.css';
import logo from '../shared/icons/logo.svg';

function Logo() {
	return (
		<div className='logo'>
			<img
				src={logo}
				alt='Logo'
			/>
		</div>
	);
}

export default Logo;
