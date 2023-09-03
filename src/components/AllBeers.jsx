import React, { useEffect, useState } from 'react';
import BeerCard from './BeerCard';
import LoadMore from './LoadMore';
import Spinner from './Spinner';

import { fetchBeersList } from '../api/beers';

export default function AllBeers() {
	const [beers, setBeers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		async function fetchBeers() {
			try {
				const data = await fetchBeersList({ page: 1 });
				setBeers(data);
				setLoading(false);
			} catch (err) {
				setLoading(false);
			}
		}

		fetchBeers();
	}, []);

	const handleLoadMore = async () => {
		const page = currentPage + 1;
		const data = await fetchBeersList({ page });
		const appended = [...beers, ...data];
		setBeers(appended);
		setCurrentPage(page);
	};

	if (loading) return <Spinner />;

	return (
		<>
			{beers.length > 0
				? beers.map(b => {
						return <BeerCard key={b.id} beer={b} />;
				  })
				: 'No beers found!'}

			<LoadMore handleLoadMore={handleLoadMore} />
		</>
	);
}
