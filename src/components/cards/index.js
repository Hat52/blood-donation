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
		default:
			return <></>;
	}
}
