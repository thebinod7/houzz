const BEER_API_ENDPOINT = process.env.REACT_APP_BEER_API;
const PAGE_LIMIT = 10;

export const fetchBeersList = ({ page = 1 }) => {
	return new Promise((resolve, reject) => {
		fetch(`${BEER_API_ENDPOINT}/beers?page=${page}&per_page=${PAGE_LIMIT}`)
			.then(async res => {
				const data = await res.json();
				resolve(data);
			})
			.catch(err => reject(err));
	});
};
