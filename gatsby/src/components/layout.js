import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import {Container, Row, Col} from 'react-bootstrap';

import Header from './header';
import {ParallaxProvider} from 'react-scroll-parallax';

const Layout = ({children}) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<main>
				<ParallaxProvider>
					<Container fluid className="px-0 main">
						<Row noGutters className="justify-content-center">
							<Col>
								<Header siteTitle={data.site.siteMetadata.title} />
							</Col>
						</Row>
						{children}
					</Container>
				</ParallaxProvider>
			</main>
		)}
	/>
);

export default Layout;
