import { Navbar } from '../../components';
import './index.css';

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

	return (
		<div style={{ height: '150vh' }}>
			<Navbar />
			<div className="section-1">
				<h1>Give Blood save a life</h1>
			</div>
		</div>
	);
}
