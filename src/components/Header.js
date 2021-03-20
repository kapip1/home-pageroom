import React from 'react';

import styled from 'styled-components';

import Hero from './Hero';
import HeaderContent from './HeaderContent';

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 66%;
    @media (max-width: 750px) {
        height: 300%;
        flex-direction: column;
    }
`;

function Header() {
    return (
        <HeaderWrapper>
            <Hero />
            <HeaderContent />
        </HeaderWrapper>
    );
}

export default Header;
