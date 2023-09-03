import Spinner from 'react-bootstrap/Spinner';

function Spinning() {
	return (
		<div className="blank-card">
			<div style={{ paddingTop: 100 }}>
				<Spinner animation="border" />
			</div>
		</div>
	);
}

export default Spinning;
