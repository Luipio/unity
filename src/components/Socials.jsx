import React from 'react';
import {SocialBlock} from "../containers/HomeStyles";
import disImg from '../img/DisIcon.png'
import telegramImg from '../img/TelegrammIcon.png'
import twitter from "../img/TwitterIcon.png"
import telegramActive from "../img/TelegrammIconActive.png"
import twitterActive from "../img/TwitterIconActive.png"
import disActive from "../img/DisIconActive.png"

const Socials = () => {
    return (
        <SocialBlock>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
                <img src={disImg} alt="Dischord"/>
                <img id="active" src={disActive} alt="Dischord Active"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
                <img src={telegramImg} alt="Telegram"/>
                <img id="active" src={telegramActive} alt="Telegram Active"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
                <img src={twitter} alt="Twitter"/>
                <img id="active" src={twitterActive} alt="Twitter Active"/>
            </a>
        </SocialBlock>
    );
};

export default Socials;
