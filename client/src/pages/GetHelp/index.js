import { Logo } from '../../assets/img';
import { Button, Textfield } from '../../components';
import './index.css';

export default function GetHelp() {
	return (
		<div className="get-help-container">
			<div className="image-container"></div>
			<div className="help-form">
				<img className="logo" src={Logo} alt="logo" />
				<h1>GET HELP</h1>
				<Textfield placeholder="Blood type" />
				<Textfield placeholder="Location" />
				<div className="checkbox-container">
					<label className="container">
						<input type="checkbox" checked="checked" />
						<span className="checkmark"></span>
						Is Urgent?
					</label>
				</div>
				<Button text="Find Help" onClick={() => console.log('')} />
			</div>
		</div>
	);
}
