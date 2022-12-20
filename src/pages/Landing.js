import { Navbar } from '../components';
export default function LandingPage() {
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			document.getElementById('navbar').style.boxShadow =
				' 0px 3px 8px 6px rgba(117, 0, 0, 0.25)';
		} else {
			document.getElementById('navbar').style.boxShadow = '';
		}
	}

	return (
		<div style={{ height: '150vh' }}>
			<Navbar />
		</div>
	);
}
