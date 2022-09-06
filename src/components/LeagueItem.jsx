import React from 'react';
import styled from 'styled-components';
import logo_lig from '../images/logo_lig.jpg';


const Wrapper = styled.div`
    width: 150px;  
    display; flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #DDDDDD;
    border-bottom: 3px solid #8DC63F;
    border-radius: 0 0 3px 3px;
    padding: 7px 7px 10px 7px;
    background-color: #FFFFFF;
    cursor: pointer;
`
const Image = styled.img`
    display: block;
    height: 150px;
    width: 150px;
    object-fit: contain;
    margin: 0 auto 15px;
`

const Name = styled.span`
    display: block;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
`

const Region = styled.span`
    display: block;
    font-size: 12px;
    text-align: center;
`


export const LeagueItem = ({emblemUrl, name, region, onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <Image src={emblemUrl ? emblemUrl : logo_lig}/>
            <Name>{name}</Name>
            <Region>{region}</Region>
        </Wrapper>
    );
};
