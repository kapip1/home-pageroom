import React from 'react';

import styled from 'styled-components';

import imageAboutLeft from '../assets/image-about-dark.jpg';
import imageAboutRight from '../assets/image-about-light.jpg';

const MainWrapper = styled.main`
    display: flex;
    height: 34%;
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    background: url(${imageAboutLeft}) no-repeat center;
    background-size: cover;
    flex: 2;
    min-height: 238px;
`;
const Middle = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    align-items: center;
    flex: 4;
    & h3 {
        letter-spacing: 4px;
        font-size: 18px;
        margin-bottom: 12px;
    }
    & p {
        font-weight: medium;
        font-size: 18px;
        color: grey;
    }
`;
const Right = styled.div`
    background: url(${imageAboutRight}) no-repeat center;
    background-size: cover;
    flex: 2.65;
    min-height: 238px;
`;

function Main() {
    return (
        <MainWrapper>
            <Left />
            <Middle>
                <h3>ABOUT OUR FURNITURE</h3>
                <p>
                    Our multifunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                </p>
            </Middle>
            <Right />
        </MainWrapper>
    );
}

export default Main;
