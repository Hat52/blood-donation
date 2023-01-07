import { Button, Footer, Textfield } from '../../components';
import './index.css';
export default function ContactUs() {
	return (
		<>
			<div className="contact-us-container">
				<div className="bg-image"></div>
				<div className="field-container">
					<h1>Get In Touch</h1>
					<Textfield placeholder="Full Name" />
					<Textfield placeholder="Phone Number" />
					<Textfield placeholder="Your Email" />
					<textarea className="text-area" placeholder="Your Message" />
					<Button text="Let's go" onClick={() => console.log('')} />
				</div>
				<Footer />
			</div>
		</>
	);
}
