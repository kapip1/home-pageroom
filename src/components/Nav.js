import React, { useState } from 'react';

import styled, { css } from 'styled-components';

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
    width: calc(50% + 69px - 33px);
    @media (max-width: 950px) {
        margin-top: 25px;
        justify-content: space-between;
        flex-direction: row-reverse;
    }
    & ul {
        display: flex;
        width: 75%;
        justify-content: space-between;
        list-style: none;
        @media (max-width: 950px) {
            position: absolute;
            display: none;
            ${({ isOpen }) =>
                isOpen &&
                css`
                    display: flex;
                    position: absolute;
                    color: black;
                    z-index: 5;
                    transform: translate(-50%, -50%);
                    left: 55%;
                    top: 5%;
                `}
        }
        & h1 {
            cursor: pointer;
        }
        & li {
            cursor: pointer;
            position: relative;
            font-size: 13.5px;
            overflow: hidden;
            padding: 10px;
            &::after {
                content: '';
                transition: 0.2s;
                position: absolute;
                top: 90%;
                left: 165%;
                transform: translate(-50%, -50%);
                height: 1px;
                width: 45px;
                background-color: white;
            }
            &:hover {
                &::after {
                    left: 50%;
                }
            }
        }
    }
`;

const Burger = styled.button`
    position: fixed;
    z-index: 4;
    width: 33px;
    height: 28px;
    background-color: transparent;
    border: none;
    position: relative;
    margin-left: 30px;
    &::before {
        z-index: 2;
        transition: 0.3s;
        content: '';
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 19%;
        width: 30px;
        height: 2px;
        background-color: white;
        ${({ isOpen }) =>
            isOpen &&
            css`
                background-color: grey;
                top: 49.5%;
                transform: translate(-50%, -50%) rotate(-45deg);
            `}
    }
    &::after {
        z-index: 2;
        transition: 0.2s;
        content: '';
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 49.5%;
        width: 30px;
        height: 2px;
        background-color: white;
        display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
    }
    & span {
        z-index: 2;
        transition: 0.3s;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 81%;
        width: 30px;
        height: 2px;
        background-color: white;
        ${({ isOpen }) =>
            isOpen &&
            css`
                background-color: grey;
                top: 49.5%;
                transform: translate(-50%, -50%) rotate(45deg);
            `}
    }
    @media (min-width: 950px) {
        display: none;
    }
`;

const ThemeGlobal = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    height: 100vh;
    width: 100vw;
    @media (min-width: 950px) {
        display: none;
    }
`;

const ThemeNav = styled.div`
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    background-color: white;
    height: 80px;
    width: 100vw;
    @media (min-width: 950px) {
        display: none;
    }
`;

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleBtnClick = () => setIsOpen((prev) => !prev);

    return (
        <NavWrapper isOpen={isOpen}>
            <h1>room</h1>
            <Burger onClick={handleBtnClick} isOpen={isOpen}>
                <span></span>
            </Burger>
            {isOpen ? (
                <>
                    {' '}
                    <ThemeGlobal onClick={handleBtnClick} /> <ThemeNav />{' '}
                </>
            ) : null}

            <ul>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </NavWrapper>
    );
}

export default Nav;
