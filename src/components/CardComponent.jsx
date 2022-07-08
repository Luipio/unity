import React, { useEffect, useCallback, useState, useRef } from 'react';
import { motion, useAnimation, useAnimationFrame } from 'framer-motion';
import Card from '../img/mainCard.svg';
import {CardBlock} from '../containers/HomeStyles';

const CardComponent = () => {
	const [rotateVal, setRotate] = useState(360);
	const [refData, setRefData] = useState(360);
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
	return (
		<CardBlock>
			<motion.img
				ref={ref}
				width="width: 257.6870504048466px"
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
