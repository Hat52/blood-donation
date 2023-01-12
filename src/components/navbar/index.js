import './index.css';
import { TextLogo } from '../../assets/img';
import { Link } from 'react-router-dom';
import { Collections } from '../../constants';
import Button from '../button';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
	const { loginWithRedirect, logout, user, isLoading } = useAuth0();
	console.log(isLoading, user, window.location);
	return (
		<div className="nav-bar" id="navbar">
			<img src={TextLogo} alt="blood donation logo" />
			<div className="link-collections">
				{Collections.Navbar.map(({ name, link }) => {
					return <Link to={link}>{name}</Link>;
				})}
				{/* {!isLoading && user && (
					<Button
						className="auth-button"
						style={{
							backgroundColor: 'none'
						}}
						onClick={() =>
							logout({
								returnTo: window.location.origin
							})
						}
						text="Log out"
					/>
				)} */}
				<Button
					className="auth-button"
					style={{
						background: 'yellow !important'
					}}
					onClick={() =>
						loginWithRedirect({
							redirectUri: 'http://localhost:3000/dashboard'
						})
					}
					text="Log in"
				/>
			</div>
		</div>
	);
}
