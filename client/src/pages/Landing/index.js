import { Navbar, Card, Footer } from '../../components';
import './index.css';
import { Collections } from '../../constants';

export default function LandingPage() {
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		const element = document.getElementById('navbar');
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			element.style.boxShadow = ' 0px 3px 8px 6px rgba(117, 0, 0, 0.25)';
			element.style.backgroundColor = '#ffffff';
		} else {
			element.style.boxShadow = '';
			element.style.backgroundColor = '';
		}
	}
	// style={{ height: '150vh' }}
	return (
		<>
			<Navbar />
			<div className="section-1">
				<h1>Give Blood save a life</h1>
			</div>
			<div className="section-2">
				<div className="card">
					<h3>Main Blood Groups</h3>
					{Collections.mainBloodGroups.map(({ type, detail }) => {
						return <Card variant="blood-group" type={type} detail={detail} />;
					})}
				</div>
			</div>
			<div className="section-3 hide-scroll-bar">
				<h3>Types of blood donation</h3>
				<div className="container-cards">
					{Collections.bloodDonationTypes.map(({ name, description }, index) => (
						<Card
							variant="blood-donation"
							className={index % 2 === 0 ? 'even' : 'odd'}
							type={name}
							detail={description}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}
