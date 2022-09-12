import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const HeaderWrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    column-gap: 10px;
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
            <NavLink to='/'>Лиги</NavLink>
            <NavLink to='/teams'>Команды</NavLink>
        </HeaderWrapper>
    );
};
