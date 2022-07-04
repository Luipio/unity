import React from 'react';
import { ButtonBlock, HomeContainer } from './HomeStyles';
import { Button } from '../components/Buttons';
import Ticker from '../components/Ticker';
import { comingSoonArr, futureArr } from '../constants/constants';
import CardComponent from '../components/CardComponent';

const Home = () => {
	return (
		<HomeContainer>
			<Ticker imgArr={futureArr} direction="left" />
			<CardComponent />
			<ButtonBlock>
				<Button primary>claim</Button>
				<Button>litepaper</Button>
			</ButtonBlock>
			<Ticker imgArr={comingSoonArr} direction="right" />
		</HomeContainer>
	);
};

export default Home;
