import React from 'react';

import styled from 'styled-components';

//grey arrow
import arrowShopNow from '../assets/icon-arrow.svg';

const HeaderContentWrapper = styled.div`
    display: flex;
    height: 665px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    flex: 4.2;
    & p {
        color: grey;
        font-size: 18px;
    }
    & h2 {
        font-size: 30px;
        margin-bottom: 20px;
    }
`;
const ShopNow = styled.div`
    display: flex;
    margin-top: 40px;
    width: 100%;
    & span {
        cursor: pointer;
        color: grey;
        transition: 0.3s;
        font-size: 22px;
        margin-right: 35px;
        &:hover {
            margin-right: 55px;
        }
    }
`;

function HeaderContent() {
    return (
        <HeaderContentWrapper>
            <h2>Discover innovative ways to decorate</h2>
            <p>
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
            </p>
            <ShopNow>
                <span>shop now</span>
                <img src={arrowShopNow} alt='arrowToShop' />
            </ShopNow>
        </HeaderContentWrapper>
    );
}

export default HeaderContent;
