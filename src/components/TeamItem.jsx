import React from 'react';
import styled from 'styled-components';
import noImage from '../images/noImage.jpg';



const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 165px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
    border: 1px solid #DDDDDD;
    border-bottom: 3px solid #8DC63F;
    border-radius: 0 0 3px 3px;
    padding: 7px 7px 10px 7px;
    background-color: #FFFFFF;
    cursor: pointer;
`

const Image = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin: 0 auto 15px;
`
const Text = styled.p`
    display: block;
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
    word-break: break-all;
`
const ExternalLink = styled.a`
    display : block,
     fontSize: 12px,
    textAlign: center,
    marginBottom: 10px,
    wordBreak: break-all,
    color: #000,
    textDecoration: underline,
`



export const TeamItem = ({name, area, flag, website}) => {
    return (
        <Item>
            <Image src={flag ? flag : noImage} />
            <Text>{name}</Text>
            <Text>{area}</Text>
           {/* <ExternalLink href={website} target='_blank'>{website}</ExternalLink>*/}
        </Item>
    );
};

