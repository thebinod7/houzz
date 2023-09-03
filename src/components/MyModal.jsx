import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { IMAGE_URL } from '../constants';

function MyModal({ show, toggleModal, handelFormSubmit }) {
	return (
		<>
			<Modal centered show={show} onHide={toggleModal}>
				<Modal.Header closeButton>
					<Modal.Title>Add a New Beer</Modal.Title>
				</Modal.Header>
				<Form onSubmit={handelFormSubmit}>
					<Modal.Body>
						<div style={{ marginBottom: 10 }}>
							<img
								style={{
									borderRadius: '5px',
									padding: 35,
									border: '1px solid #dee2e6'
								}}
								height={150}
								src={IMAGE_URL}
								alt="Beer"
							/>
						</div>
						<Form.Group className="mb-3" controlId="exampleForm.beerName">
							<Form.Control type="text" name="beer" placeholder="Beer name*" required />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.genre">
							<Form.Control type="text" name="tagline" placeholder="Genre*" required />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.description">
							<Form.Control
								as="textarea"
								name="description"
								rows={3}
								placeholder="Description*"
								required
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="default" onClick={toggleModal}>
							Cancel
						</Button>
						<button type="submit" className="custom-button">
							Save
						</button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
}

export default MyModal;
