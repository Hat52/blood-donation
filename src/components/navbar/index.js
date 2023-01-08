import './index.css';
import { TextLogo } from '../../assets/img';
import { Link } from 'react-router-dom';
import { Collections } from '../../constants';
import Button from '../button';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
	const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

	return (
		<div className="nav-bar" id="navbar">
			<img src={TextLogo} alt="blood donation logo" />
			<div className="link-collections">
				{Collections.Navbar.map(({ name, link }) => {
					return <Link to={link}>{name}</Link>;
				})}
				{isAuthenticated ? (
					<Button
						onClick={() =>
							logout({
								returnTo: window.location.origin
							})
						}
						text="Log out"
					/>
				) : (
					<Button onClick={() => loginWithRedirect()} text="Log in" />
				)}
			</div>
		</div>
	);
}
