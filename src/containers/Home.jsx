import React from 'react';
import {
	ButtonBlock,
	HomeContainer,
	HomeContainerWrapper,
	LastTickerWrapper,
	ClaimLink,
} from './HomeStyles';
import { Button } from '../components/Buttons';
import Ticker from '../components/Ticker';
import { comingSoonArr, futureArr } from '../constants/constants';
import CardComponent from '../components/CardComponent';
import Socials from '../components/Socials';

const Home = () => {
	return (
		<HomeContainerWrapper>
			<HomeContainer>
				<Ticker imgArr={futureArr} direction="left" />
				<CardComponent />
				<ButtonBlock>
					<ClaimLink
						target="_blank"
						rel="noreferrer"
						href="https://gleam.io/eg0Q7/unity-nft-airdrop"
					>
						<Button primary>claim</Button>
					</ClaimLink>
				</ButtonBlock>
				<Socials />
			</HomeContainer>
			<LastTickerWrapper
				style={{
					height: '10vh',
					backgroundColor: 'black',
				}}
			>
				<Ticker imgArr={comingSoonArr} direction="right" bottomTicker />
			</LastTickerWrapper>
		</HomeContainerWrapper>
	);
};

export default Home;
