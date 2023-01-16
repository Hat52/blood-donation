import { useEffect } from 'react';
import { Navbar } from '../../components';
import { giveNavbarDropShadow } from '../../utils';
import './index.css';

export default function About() {
	useEffect(() => {
		giveNavbarDropShadow();
	}, []);

	return (
		<div className="about-container">
			<Navbar />
			<div className="content">
				<h1>About Us</h1>
				<p>Drive For Blood Donation</p>
				<div className="about-project">
					<p className="text-description">
						We are dedicated to saving lives through blood donation. By registering as a donor
						and scheduling regular donation appointments, individuals can play a vital role in
						helping accident and surgery patients, cancer patients, and others whose lives
						depend on blood transfusions. We believe that every blood donation can make a
						difference and we are committed to making the donation process as easy and
						convenient
					</p>
					<div className="image-container-about"></div>
				</div>
			</div>
		</div>
	);
}
