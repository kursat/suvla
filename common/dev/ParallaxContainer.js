import React, {useLayoutEffect} from 'react';
import {ParallaxBanner, useController} from 'react-scroll-parallax';

const ParallaxContainer = ({className, id, image, children}) => {
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
						image,
						amount: 0.4,
					},
				]}
				className={className}>
				{children}
			</ParallaxBanner>
		</section>
	);
};

ParallaxContainer.propTypes = {};

ParallaxContainer.defaultProps = {};

export default ParallaxContainer;
