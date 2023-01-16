import { Logo } from '../../assets/img';
import { Textfield, Button, LinkImage } from '../../components';
import './index.css';

const links = [
	{
		name: 'github',
		to: ''
	},
	{
		name: 'twitter',
		to: ''
	},
	{
		name: 'google',
		to: ''
	},
	{
		name: 'facebook',
		to: ''
	}
];

export default function LoginComponent() {
	return (
		<div className="login-container">
			<div className="image-container"></div>
			<div className="login-form">
				<img className="logo" src={Logo} alt="logo" />
				<h1>Login</h1>
				<Textfield placeholder="EMAIL" />
				<Textfield placeholder="PASSWORD" />
				<Button text="Let's go" onClick={() => console.log('')} />
				<div className="link-button-container">
					<Button text="Forgot Password?" variant="link" to="forgot" />
					<Button text="Sign up" variant="link" to="/join" />
				</div>
				<LinkImage links={links} />
			</div>
		</div>
	);
}
