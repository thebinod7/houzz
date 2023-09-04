import React from 'react';
import Card from 'react-bootstrap/Card';
import { Tooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';

const BeerCard = ({ beer }) => {
	return (
		<Card
			className="my-card"
			style={{ width: '100%', marginTop: 10, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
		>
			<div className="row no-gutters">
				<div className="col-md-1">
					<a href="#tooltip" className="my-anchor-element">
						<Card.Img style={{ padding: 20, height: 180 }} src={beer.image_url} alt="Beer" />
					</a>
				</div>
				<div className="col-md-11">
					<Card.Body>
						<Tooltip anchorSelect=".my-anchor-element" place="top">
							Ingredients details goes here!
						</Tooltip>
						<Card.Title>{beer.name}</Card.Title>
						<Card.Subtitle style={{ color: '#E3B778' }}>{beer.tagline}</Card.Subtitle>
						<Card.Text>{beer.description}</Card.Text>
					</Card.Body>
				</div>
			</div>
		</Card>
	);
};

export default BeerCard;
