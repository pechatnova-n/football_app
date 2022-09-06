import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {LeagueItem} from "./LeagueItem";
import {LeagueContext} from "../context";
import {getLeagues} from "../api/config";
import {useNavigate} from "react-router";


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
`

export const LeagueList = () => {

    const {allLeagues, setAllLeagues} = useContext(LeagueContext);
    const navigate =  useNavigate();

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
                    const info = {
                        emblemUrl: item.emblemUrl,
                        name: item.name,
                        region: item.area.name,
                        code: item.code,
                    }
                    return <LeagueItem key={item.id}
                                       onClick={() => navigate(`/leagues/${item.code}`, {replace: false})} {...info}  />
                })
            }
        </Wrapper>
    );
};
