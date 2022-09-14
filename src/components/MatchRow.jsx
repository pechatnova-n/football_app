import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 4fr 4fr 2fr 4fr 3fr;
    grid-row-gap: 20px;
    grid-column-gap: 10px;
    font-size: 14px;
    align-items: center;
    padding: 5px 0;
    &:nth-child(odd) {
        background-color: #F2F2F2;
    }
    
`

const Ceil = styled.div`
    &:nth-child(4) {
        text-align: center;    
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
`



export const MatchRow = ({dataDay, time, name, awayTeam, score, homeTeam, status}) => {
    return (
        <Wrapper>
            <Ceil>{dataDay} {time}</Ceil>
            <Ceil>{name}</Ceil>
            <Ceil>{awayTeam}</Ceil>
            <Ceil>
                <Inline>{ (status === 'FINISHED') ? `${score.fullTime.awayTeam} : ${score.fullTime.homeTeam}` : 'vs' }</Inline>
            </Ceil>
            <Ceil>{homeTeam}</Ceil>
            <Ceil><Inline status={status}>{status}</Inline></Ceil>
        </Wrapper>
    )
}