import React from 'react';

export default function MyTabs({ TABS, currentTab, handleTabChange, toggleModal }) {
	return (
		<div className="toolbar" style={{ marginTop: 20 }}>
			<div className="left-buttons">
				<a
					href="#all_bears"
					onClick={() => handleTabChange(TABS.ALL_BEERS)}
					className={`button ${currentTab === TABS.ALL_BEERS && 'active-button'}`}
				>
					All Beers
				</a>
				<a
					href="#my_bears"
					onClick={() => handleTabChange(TABS.MY_BEERS)}
					className={`button ${currentTab === TABS.MY_BEERS && 'active-button'}`}
				>
					My Beers
				</a>
			</div>
			{currentTab === TABS.MY_BEERS && (
				<button className="custom-button" onClick={toggleModal}>
					Add a new beer
				</button>
			)}
		</div>
	);
}
