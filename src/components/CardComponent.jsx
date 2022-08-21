import React, { useEffect, useState } from 'react';
import Gif from '../img/vid_01.mp4';
import { CardBlock } from '../containers/HomeStyles';

const CardComponent = () => {
	function getWindowSize() {
		const { innerWidth } = window;
		return innerWidth;
	}

	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<CardBlock>
			<video
				style={{
					width: windowSize > 1040 ? '600px' : '240px',
					height: windowSize > 1040 ? '400px' : '140px',
				}}
				loop
				autoPlay
				src={Gif}
				playsInline
				muted
			/>
		</CardBlock>
	);
};

export default CardComponent;
