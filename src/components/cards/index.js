import { WhiteLogo } from '../../assets/img';
import './index.css';

export default function Cards({ variant, type, detail, className }) {
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
				<div className={`blood-donation-card ${className}`}>
					<div className="name">
						<img src={WhiteLogo} alt="logo" />
						<h3>{type}</h3>
					</div>
					<div className="details">
						<p className="details-text">{detail}</p>
					</div>
				</div>
			);
		default:
			return <></>;
	}
}
