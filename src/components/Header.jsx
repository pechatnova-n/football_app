import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A6DF58;
`
const Logo = styled.p`
    font-size: 1.5rem;
    color: #606060;
`


export const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>Футбольная статистика</Logo>
        </HeaderWrapper>
    );
};
