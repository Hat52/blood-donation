import { Link } from 'react-router-dom';
import { Facebook, Github, Google, Twitter } from '../../assets/img';

export default function LinkImage({ links }) {
	return (
		<div className="social-links">
			{links.map(({ to, name }) => (
				<Link to={to}>
					<img src={selectIcons(name)} alt="github" />
				</Link>
			))}
		</div>
	);
}

const selectIcons = (name) => {
	switch (name) {
		case 'github':
			return Github;
		case 'twitter':
			return Twitter;
		case 'facebook':
			return Facebook;
		case 'google':
			return Google;
	}
};
