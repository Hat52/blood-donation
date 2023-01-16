import { Link } from 'react-router-dom';
import './index.css';

export default function Button(props) {
	const { text, variant } = props;
	switch (variant) {
		case 'link':
			const linkClassName = props.className || 'link-button';
			return (
				<Link className={linkClassName} {...props}>
					{text}
				</Link>
			);
		case 'text':
		default:
			const className = props.className || 'text-button';
			return (
				<button className={className} {...props}>
					{text}
				</button>
			);
	}
}
