import { WhiteLogo } from '../../assets/img';
import './index.css';

export default function Cards({ variant, type, detail }) {
	switch (variant) {
		case 'blood-group':
			return (
				<div className="blood-group-card">
					<div className="name">{type}</div>
					<div className="details">{detail}</div>
				</div>
			);
		case 'blood-donation':
			return (
				<div className="blood-donation-card">
					<div className="name">
						<img src={WhiteLogo} alt="logo" />
						<h3>Full Blood Donation</h3>
					</div>
					<div className="details">Hello from the other side</div>
				</div>
			);
		default:
			return <></>;
	}
}
