import { Link } from 'react-router-dom';
import './index.css';

export default function Button(props) {
	const { text, variant } = props;
	switch (variant) {
		case 'link':
			return (
				<Link className="link-button" {...props}>
					{text}
				</Link>
			);
		case 'text':
		default:
			return (
				<button className="text-button" {...props}>
					{text}
				</button>
			);
	}
}
