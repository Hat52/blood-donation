import './index.css';
import { TextLogo } from '../../assets/img';
import { Link } from 'react-router-dom';
import { Collections } from '../../constants';

export default function Navbar() {
	return (
		<div className="nav-bar" id="navbar">
			<img src={TextLogo} alt="blood donation logo" />
			<div className="link-collections">
				{Collections.Navbar.map(({ name, link }) => {
					return <Link to={link}>{name}</Link>;
				})}
			</div>
		</div>
	);
}
