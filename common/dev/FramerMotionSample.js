import React from 'react';
import {motion} from 'framer-motion';
import {graphql, useStaticQuery} from 'gatsby';

export const FramerMotionSample = ({isVisible}) => {
	const data = useStaticQuery(graphql`
		query MyQuery1 {
			file(relativePath: {eq: "intro/intro1.jpg"}) {
				publicURL
			}
		}
	`);

	const variants = {
		hidden: {opacity: 0},
		visible: {opacity: 1, x: 100},
	};

	return (
		<motion.img
			initial="hidden"
			animate="visible"
			transition={{duration: 2}}
			variants={variants}
			src={data.file.publicURL}
			style={{backgroundImage: data.file.publicURL, height: '100%'}}
		/>
	);
};
