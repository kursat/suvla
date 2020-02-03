import React, {useLayoutEffect} from 'react';
import {ParallaxBanner, useController} from 'react-scroll-parallax';
import heroImage1 from '../images/hero-image1.jpg';

const Hero1 = ({id, className, children}) => {
	const {parallaxController} = useController();

	useLayoutEffect(() => {
		const handleResize = () => {
			parallaxController.update();
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<section id={id} className={className}>
			<ParallaxBanner
				layers={[
					{
						image: heroImage1,
						amount: 0.4,
					},
				]}
				className={className}>
				{children}
			</ParallaxBanner>
		</section>
	);
};

Hero1.propTypes = {};

Hero1.defaultProps = {};

export default Hero1;
