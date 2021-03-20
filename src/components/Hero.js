import React, { useContext } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from '../AppContext';
import Nav from './Nav';
import Panel from './Panel';

//images for desktop
import dektopImage0 from '../assets/desktop-image-hero-1.jpg';
import dektopImage1 from '../assets/desktop-image-hero-2.jpg';
import dektopImage2 from '../assets/desktop-image-hero-3.jpg';
//images for mobile
import mobileImage0 from '../assets/mobile-image-hero-1.jpg';
import mobileImage1 from '../assets/mobile-image-hero-2.jpg';
import mobileImage2 from '../assets/mobile-image-hero-3.jpg';
const HeroWrapper = styled.div`
    display: flex;
    transition: 0.3s;
    min-height: 360px;
    padding: 30px 0 0 30px;
    @media (max-width: 550px) {
        padding: 0;
    }
    flex-direction: column;
    justify-content: space-between;
    flex: 5.8;
    ${({ currentSlide }) =>
        currentSlide === 0
            ? css`
                  background-image: url(${dektopImage0});
              `
            : css`
                  background-image: url(${currentSlide === 1
                      ? dektopImage1
                      : dektopImage2});
              `};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 550px) {
        ${({ currentSlide }) =>
            currentSlide === 0
                ? css`
                      background-image: url(${mobileImage0});
                  `
                : css`
                      background-image: url(${currentSlide === 1
                          ? mobileImage1
                          : mobileImage2});
                  `};
    }
`;

function Hero() {
    const { currentSlide } = useContext(AppContext);
    return (
        <HeroWrapper currentSlide={currentSlide}>
            <Nav />
            <Panel />
        </HeroWrapper>
    );
}

export default Hero;
