import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-vanilla-tilt';

const cardItems = [
	{
		title: 'Title',
		content:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		action: 'Go somewhere',
	},
	{
		title: 'Title 2',
		content:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		action: 'Go somewhere',
	},
	{
		title: 'Title 3',
		content:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		action: 'Go somewhere',
	},
];

const Services1 = () => {
	return (
		<section className={'mb-5'} style={{overflow: 'hidden', height: '900px'}}>
			<Container className={'mt-5'}>
				<p>What we do</p>
				<h1>Our Services</h1>
				<Row>
					{cardItems.map((item, index) => (
						<Col key={index}>
							<Fade delay={(index + 1) * 200} bottom>
								<Tilt style={{}}>
									<Card>
										<Card.Img
											variant="top"
											src="https://via.placeholder.com/300"
										/>
										<Card.Body>
											<Card.Title>{item.title}</Card.Title>
											<Card.Text>{item.content}</Card.Text>
											<Button variant="primary">{item.action}</Button>
										</Card.Body>
									</Card>
								</Tilt>
							</Fade>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

Services1.propTypes = {};

Services1.defaultProps = {};

export default Services1;
