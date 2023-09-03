import React from 'react';

export default function BlankPage({ toggleModal }) {
	return (
		<div className="blank-card">
			<div style={{ paddingTop: 100 }}>Nothing to see yet.</div>
			<div>
				<a onClick={toggleModal} style={{ textDecoration: 'none' }} href="#add">
					Click here &nbsp;
				</a>
				to add your first beer
			</div>
		</div>
	);
}
