import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const HeaderWrapper = styled.div`
    position: relative;
    height: 80px;
    display: flex;
    justify-content: center;
    column-gap: 10px;
    align-items: center;
    background-color: rgba(256, 256, 256, 0.9);
    flex: 0 0 auto;
    &:before{
        display: block;
        position: absolute;
        bottom: 0;
        right: 100%;
        content: '';
        width: 1000px;
        height: 100%;
        background-color: rgba(256, 256, 256, 0.9);
    }
     &:after{
        display: block;
        position: absolute;
        bottom: 0;
        left: 100%;
        content: '';
        width: 1000px;
        height: 100%;
        background-color: rgba(256, 256, 256, 0.9);
    }
`
const Logo = styled(NavLink)`
    font-size: 16px;
    color: #000;
    font-weight: bold;
    &:hover {
        color: #000;
        text-decoration: underline;
    }
`


export const Header = () => {
    return (
        <HeaderWrapper>
            <Logo to='/'>Лиги</Logo>
            <Logo to='/teams'>Команды</Logo>
        </HeaderWrapper>
    );
};
