import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-vanilla-tilt';
import person3 from '../images/person3.jpg';
import person1 from '../images/person1.jpg';
import person2 from '../images/person2.jpg';

const Persons1 = () => {
	const cardItems = [
		{
			image: person1,
			overlayColor: 'red',
		},
		{
			image: person2,
			overlayColor: 'green',
		},
		{
			image: person3,
			overlayColor: 'blue',
		},
	];

	return (
		<section className={'mb-5'}>
			<Container className={'mt-5'}>
				<p>Who we are</p>
				<h1>Our Team</h1>
				<Row>
					{cardItems.map((item, index) => (
						<Col key={index}>
							<Fade delay={(index + 1) * 200} bottom>
								<Tilt
									className={'tilt'}
									options={{glare: true, scale: 0}}
									style={{}}>
									<Card>
										<Card.Img variant="top" src={item.image} />
										<div
											className={'person-card-overlay'}
											style={{backgroundColor: item.overlayColor}}
										/>
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

Persons1.propTypes = {};

Persons1.defaultProps = {};

export default Persons1;
