import React from 'react';
import BlankPage from './BlankPage';
import BeerCard from './BeerCard';

export default function MyBeers({ beers, toggleModal }) {
	if (beers.length < 1) return <BlankPage toggleModal={toggleModal} />;
	return (
		<>
			{beers.map(b => {
				return <BeerCard key={b.id} beer={b} />;
			})}
		</>
	);
}
