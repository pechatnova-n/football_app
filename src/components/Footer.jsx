import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    background-color: #A6DF58;
    padding: 10px;
    font-size: 14px;
    flex: 0 0 auto;
    background-color: rgba(256, 256, 256, 0.9);
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

export const Footer = () => {
    return (
        <Wrapper>
            2022
        </Wrapper>
    );
};

