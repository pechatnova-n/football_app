import React, {useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";
import {LeagueItem} from "./LeagueItem";


const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
    padding-top: 20px;
`

export const LeagueList = ({allLeagues, setAllLeagues}) => {

    useEffect(() => {
        if(!allLeagues.length) {
            const options = {
                method: 'GET',
                headers: {
                    'X-Auth-Token': '6514a50db6064d86a774da3072668946'
                }
            }
            axios.get('https://api.football-data.org/v2/competitions/', options)
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
