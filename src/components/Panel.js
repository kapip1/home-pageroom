import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import styled from 'styled-components';

//buttos angle image svg
import iconLeft from '../assets/icon-angle-left.svg';
import iconRight from '../assets/icon-angle-right.svg';

const PanelWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
`;
const Button = styled.button`
    display: flex;
    background-color: black;
    border: none;
    background-image: url(${({ primary }) => (primary ? iconLeft : iconRight)});
    background-repeat: no-repeat;
    background-position: center;
    width: 120px;
    height: 120px;
    transition: 0.3s;
    &:hover {
        background-color: grey;
        opacity: 0.9;
    }
    @media (max-width: 750px) {
        width: 75px;
        height: 75px;
        transform: rotate(180deg);
        order: ${({ primary }) => (primary ? 1 : -1)};
    }
`;
const Controls = styled.div`
    display: flex;
    align-items: stretch;
    transform-origin: right;
    transform: rotate(180deg);
    @media (max-width: 750px) {
        transform: rotate(0deg);
    }
`;
function Panel() {
    const { handleCurrentSlide } = useContext(AppContext);

    return (
        <PanelWrapper>
            <Controls>
                <Button primary onClick={() => handleCurrentSlide('1')} />
                <Button onClick={() => handleCurrentSlide('2')} />
            </Controls>
        </PanelWrapper>
    );
}

export default Panel;
