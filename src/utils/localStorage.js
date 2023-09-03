export const saveBeers = data => {
	localStorage.setItem('beers', JSON.stringify(data));
};

export const listBeers = () => {
	const beers = localStorage.getItem('beers');
	if (!beers) return [];
	return JSON.parse(beers);
};
