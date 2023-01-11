import './index.css';

const Tooltip = ({ description }) => {
	return (
		<div className="tool-tip">
			<div className="tooltip-icon">i</div>
			<div className="description-tooltip">
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Tooltip;
