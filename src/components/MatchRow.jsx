import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 4fr 4fr 2fr 4fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    font-size: 11px;
    align-items: center;
    padding: 5px;
    &:nth-child(odd) {
        background-color: #F2F2F2;
    }
   
    
    @media(min-width: 767px) {
        grid-template-columns: 4fr 4fr 4fr 2fr 4fr 2fr;
        grid-row-gap: 20px;
        grid-column-gap: 10px;
        font-size: 14px;
    }
    
`

const Ceil = styled.div`
    &:nth-child(4) {
        text-align: center;  
        word-wrap: normal;  
    } 
    &:last-child{
        display: none;    
    }     
     @media(min-width: 767px) {
         &:last-child{
            display: block;    
        }  
    } 
`

const Inline = styled.span`
    display: inline-block;
    background-color: ${props => {
    if (props.status === 'SCHEDULED') {
        return '#D5AB20';
    } else if (props.status === 'POSTPONED') {
        return '#CA2027';
    } else if (props.status === 'FINISHED') {
        return '#6CC72A';
    } else {
        return '#8F8F8F';
    }
  }
};
    border-radius: 3px;
    color: #FFF;
    padding: 2px 5px;
    font-size: 11px;
`



export const MatchRow = ({dataDay, time, name, awayTeam, score, homeTeam, status}) => {
    return (
        <Wrapper>
            <Ceil>{dataDay} {time}</Ceil>
            <Ceil>{name.split('_').join(' ')}</Ceil>
            <Ceil>{homeTeam}</Ceil>
            <Ceil>
                <Inline>{ (status === 'FINISHED') ? `${score.fullTime.awayTeam} : ${score.fullTime.homeTeam}` : 'vs' }</Inline>
            </Ceil>
            <Ceil>{awayTeam}</Ceil>
            <Ceil><Inline status={status}>{status}</Inline></Ceil>
        </Wrapper>
    )
}

