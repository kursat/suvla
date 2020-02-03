import React from 'react';
import ParallaxBanner from 'react-scroll-parallax/cjs/components/ParallaxBanner';
import {ParallaxProvider} from 'react-scroll-parallax/cjs';
const ParallaxSample = props => {
	return (
		<ParallaxProvider>
			<ParallaxBanner
				className="your-class"
				layers={[
					{
						image:
							'https://images.unsplash.com/photo-1577894947058-cfdae4276bef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1928&q=80',
						amount: 0.4,
					},
					{
						image:
							'https://www.freepnglogos.com/uploads/bubbles-png/bubbles-hodge-3.png',
						amount: 0.1,
					},
				]}
				style={{
					height: '100vh',
				}}>
				<h1>Banner Children</h1>
			</ParallaxBanner>
		</ParallaxProvider>
	);
};

ParallaxSample.propTypes = {};

ParallaxSample.defaultProps = {};

export default ParallaxSample;
