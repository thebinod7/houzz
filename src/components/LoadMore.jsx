import React from 'react';

export default function LoadMore({ handleLoadMore }) {
	return (
		<div style={{ textAlign: 'center', padding: 20 }}>
			<a onClick={handleLoadMore} className="load-more" href="#More">
				Load More <i className="fa fa-caret-down"></i>
			</a>
		</div>
	);
}
