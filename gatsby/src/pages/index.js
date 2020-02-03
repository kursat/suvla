import React from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'gatsby';

const IndexPage = () => {
	return (
		<Container>
			<h1>Templates</h1>
			<Link to={'variant1'}>Variant 1</Link>
		</Container>
	);
};

export default IndexPage;
