import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar';
import AllBeers from './components/AllBeers';
import MyTabs from './components/MyTabs';
import MyBeers from './components/MyBeers';

import MyModal from './components/MyModal';
import { TABS, IMAGE_URL } from './constants';
import { saveBeers, listBeers } from './utils/localStorage';

function App() {
	const [currentTab, setCurrentTab] = useState(TABS.ALL_BEERS);
	const [showModal, setShowModal] = useState(false);
	const [beers, setBeers] = useState([]);

	const handleTabChange = tab => setCurrentTab(tab);

	const toggleModal = () => setShowModal(!showModal);

	const handelFormSubmit = e => {
		e.preventDefault();
		const data = new FormData(e.target);
		const name = data.get('beer');
		const tagline = data.get('tagline');
		const description = data.get('description');
		const id = Math.floor(Date.now() + Math.random());
		saveAndUpdateState({ id, name, image_url: IMAGE_URL, tagline, description });
	};

	function saveAndUpdateState(payload) {
		const allBeers = [payload, ...beers];
		saveBeers(allBeers);
		setBeers(allBeers);
		toggleModal();
	}

	useEffect(() => {
		function fetchBeers() {
			const beers = listBeers();
			setBeers(beers);
		}
		fetchBeers();
	}, []);

	return (
		<>
			<Navbar />
			<Container>
				<MyTabs
					TABS={TABS}
					handleTabChange={handleTabChange}
					currentTab={currentTab}
					toggleModal={toggleModal}
				/>

				<div style={{ marginTop: 10 }}>
					{currentTab === TABS.ALL_BEERS && <AllBeers />}
					{currentTab === TABS.MY_BEERS && <MyBeers beers={beers} toggleModal={toggleModal} />}
				</div>
			</Container>

			<MyModal show={showModal} toggleModal={toggleModal} handelFormSubmit={handelFormSubmit} />
		</>
	);
}

export default App;
