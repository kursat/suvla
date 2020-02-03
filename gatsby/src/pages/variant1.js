import React from 'react';
import Layout from '../components/layout';
import Hero1 from '../../../common/hero/Hero1';
import Seo from '../components/Seo';
import {Button, Col, Container, Row} from 'react-bootstrap';
import Services1 from '../../../common/services/Services1';
import Persons1 from '../../../common/persons/Persons1';

import '../../../common/styles/style.scss';

const variant1 = () => {
	return (
		<Layout pageInfo={{pageName: 'variant1'}}>
			<Seo title="Variant1" />
			<Hero1 id={'hero'} className={'vh-100'}>
				<div className={'hero-content'}>
					<Container>
						<Row noGutters>
							<Col className={'slogan'}>
								<Row>
									Get ready for the launch of our amazing new template Pivot,
									You will be awed.
								</Row>

								<Row noGutters>
									<Col lg>
										<Button
											variant={'outline-secondary'}
											size={'sm'}
											className={'mr-1'}>
											Customize Pivot
										</Button>
										<Button size={'sm'} variant={'primary'}>
											Try Pivot
										</Button>
									</Col>
								</Row>
							</Col>
							<Col />
						</Row>
					</Container>
				</div>
			</Hero1>
			<Services1 />
			<section className={'vh-30'} style={{backgroundColor: '#67cfff'}} />
			<Persons1 />
			<section className={'vh-40'} style={{backgroundColor: '#d7ffac'}} />
		</Layout>
	);
};

variant1.propTypes = {};

variant1.defaultProps = {};

export default variant1;
