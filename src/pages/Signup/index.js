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

export default function Signup() {
	return (
		<div className="login-container">
			<div className="image-container"></div>
			<div className="login-form sign-up-form">
				<img className="logo" src={Logo} alt="logo" />
				<h1>Signup</h1>
				<Textfield placeholder="Email" />
				<Textfield placeholder="Full Name" />
				<Textfield placeholder="Phone Number" />
				<Textfield placeholder="Address" />
				<Textfield placeholder="Blood Group" />
				<Textfield placeholder="Distance Willing To Travel" />
				<Textfield placeholder="Password" />
				<Textfield placeholder="Confirm Password" />
				<Button text="Join" onClick={() => console.log('')} />
				{/* <div className="link-button-container">
					<Button text="Forgot Password?" variant="link" to="forgot" />
					<Button text="Sign up" variant="link" to="/join" />
				</div> */}
				<LinkImage links={links} />
			</div>
		</div>
	);
}
