import { useEffect, useRef } from 'react';
import { Pattern } from '../../assets/img';
import { Collections } from '../../constants';
import { Tooltip } from '../../components/';
import './index.css';

export default function Dashboard() {
	const endDiv = useRef(null);

	const scrollToBottom = () => {
		const element = document.getElementById('request-container');
		element.scrollTop = element.scrollHeight;
	};

	useEffect(() => {
		scrollToBottom();
	}, []);
	return (
		<div className="dashboard-container">
			<div className="details-section">
				<div className="cards-container">
					<Card />
					<Card />
				</div>
				<div className="list-card-container">
					<ListCard />
				</div>
			</div>
			<div ref={endDiv} id="request-container" className="request-section hide-scroll-bar">
				{Array(10)
					.fill('0')
					.map((_, index) => (
						<>
							<Request />
							{index === 9 ? <div /> : null}
						</>
					))}
			</div>
		</div>
	);
}

const Request = () => (
	<div className="request-card">
		<p className="distance red-text">5 Miles Away from you</p>
		<span className="heading">Hamza Ali</span>
		<div className="details-div">
			<span className="heading">Blood Type :</span>
			<span className="details">A+</span>
		</div>
		<div className="details-div">
			<span className="heading">Address :</span>
			<span className="details">Mohalla civil hospital Sarai Naimat khan</span>
		</div>
		<div className="details-div">
			<span className="heading">Due Date :</span>
			<span className="details">11/22/24</span>
		</div>
	</div>
);

const Card = () => {
	return (
		<div className="stats-cards">
			<img src={Pattern} className="pattern" />
			<div className="description">8,000 + units of Blood is Required Everyday in Pakistan </div>
		</div>
	);
};

const ListCard = () => {
	return (
		<div className="rarest-blood-type">
			<div className="heading-div">
				<h3 className="h3">Rarest Blood Type</h3>
				<Tooltip />
			</div>
			<ol>
				{Collections.rarestBloodType.map((type) => (
					<li>{type}</li>
				))}
			</ol>
		</div>
	);
};
