import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";
import {LeagueItem} from "./LeagueItem";
import {LeagueContext} from "../context";
import {getLeagues} from "../api/config";


const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
`

export const LeagueList = () => {

    const {allLeagues, setAllLeagues} = useContext(LeagueContext);

    useEffect(() => {
        if(!allLeagues.length) {
             getLeagues()
                 .then(response => {
                   let data = response.data.competitions;
                   setAllLeagues(data);
               })
       }
    }, [])


    return (
        <Wrapper>
            {
                allLeagues.map(item => {
                    return <LeagueItem key={item.id} emblemUrl={item.emblemUrl} name={item.name} region={item.area.name} />
                })
            }
        </Wrapper>
    );
};
