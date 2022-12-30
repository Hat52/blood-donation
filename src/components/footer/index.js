import { Link } from 'react-router-dom';
import { about, githubString } from '../../constants/strings';
import { TextLogo, Github, Facebook, Google, Twitter } from '../../assets/img';
import './index.css';

export default function Footer() {
	return (
		<div className="footer-container">
			<div className="about-container">
				<h3>About</h3>
				<p className="about-p">
					{about}{' '}
					<Link to="#" className="here-link">
						here
					</Link>
				</p>
			</div>
			<div className="social-links-container">
				<img src={TextLogo} alt="logo" />
				<p>
					An open-source project developed and designed by{' '}
					<a target="_blank" href={githubString} className="here-link">
						Hamza Ali
					</a>
				</p>
				<div className="social-links">
					<img src={Github} alt="github" />
					<img src={Google} alt="Google" />
					<img src={Facebook} alt="Facebook" />
					<img src={Twitter} alt="Twitter" />
				</div>
			</div>
		</div>
	);
}
