import React from 'react';
import styled from 'styled-components';
import mobileBG from '../img/mobileBG.png';
import desktopBG from '../img/desktopBG.png';

export const HomeContainer = styled.div`
	display: grid;
	background-color: #000000;
	//background-image: url(${mobileBG});
	background-size: cover;
	@media (min-width: 1040px) {
		//background-image: url(${desktopBG});
	}
	height: 100%;
	margin: 0;
	padding-top: 19.67px;
`;

export const ButtonBlock = styled.div`
	display: grid;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	//height: 125px;
	@media (min-width: 1040px) {
		display: flex;
		flex-direction: row;
	}
`;

export const SocialBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 138px;
	width: 100%;
	margin: 0 auto;
	a {
		position: relative;
		#active {
			opacity: 0;
			position: absolute;
			left: 0;
			top: 0;
		}
		&:hover {
			& > img:first-child {
				opacity: 0;
			}
			#active {
				opacity: 1;
			}
		}
	}
	img {
		transition: 0.3s ease-in-out opacity;
		position: relative;
		width: 25px;
	}
	@media (min-width: 1040px) {
		max-width: 250px;
		width: 100%;
		margin: 50px auto;
		img {
			width: 46px;
		}
	}
`;

export const CardBlock = styled.div`
	position: relative;
	display: grid;
	justify-content: center;
`;

export const CardImg = {
	cursor: 'pointer',
};
