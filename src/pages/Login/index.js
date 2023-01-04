import { Logo } from '../../assets/img';
import { Textfield } from '../../components';
import './index.css';

export default function LoginComponent() {
	return (
		<div className="login-container">
			<div className="image-container"></div>
			<div className="login-form">
				<img src={Logo} alt="logo" />
				<h1>Login</h1>
				<Textfield placeholder="EMAIL" />
				<Textfield placeholder="PASSWORD" />
			</div>
		</div>
	);
}
