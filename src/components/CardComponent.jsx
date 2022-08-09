import React, { useEffect, useCallback, useState, useRef } from 'react';
import { motion, useAnimation, useAnimationFrame } from 'framer-motion';
import Card from '../img/vid_0.gif';
import { CardBlock } from '../containers/HomeStyles';

const CardComponent = () => {
	const [rotateVal, setRotate] = useState(0);
	const [refData, setRefData] = useState(0);
	const controls = useAnimation();
	const ref = useRef(null);
	const transition = {
		duration: 4,
		repeat: Infinity,
		repeatType: 'loop',
		ease: 'linear',
	};
	const start = useCallback(() => {
		controls.stop();
	}, [controls]);

	const end = useCallback(() => {
		controls.start({
			transition,
			rotate: 360 - rotateVal * -1,
		});
	}, [controls, ref?.current?.style?.transform]);

	useAnimationFrame(() => {
		setRefData(ref?.current?.style?.transform?.match(/\d+/g));
		setRotate(refData[0]);
	});

	useEffect(() => {
		controls.start({
			transition,
			rotate: rotateVal,
		});
	}, []);
	useEffect(() => {
		controls.start({
			transition,
			rotate: rotateVal,
		});
	}, [controls]);

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
			<motion.img
				style={{
					width: windowSize > 1040 ? '400px' : '240px',
					height: windowSize > 1040 ? '300px' : '140px',
				}}
				ref={ref}
				src={Card}
				alt="magic"
				exit="exit"
				onHoverStart={start}
				onHoverEnd={end}
				animate={controls}
			/>
		</CardBlock>
	);
};

export default CardComponent;
