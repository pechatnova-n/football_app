import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {LeagueItem} from "./LeagueItem";
import {getLeagues} from "../api/config";
import {useNavigate} from "react-router";
import {CustomSelect} from "./Controls/CustomSelect";


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
    padding: 30px 0;
`

export const LeagueList = ({allLeagues, setAllLeagues}) => {
    const [filteredByRegion, setFilteredByRegion] = useState(allLeagues);
    const navigate =  useNavigate();



    const handleSelect = (region) => {
        let data = [...allLeagues];
        if(region) {
            data = data.filter((l) => l.area.name.includes(region));
        }
        setFilteredByRegion(data);
    }

    useEffect(() => {
        if(!allLeagues.length) {
             getLeagues()
                 .then(response => {
                   let data = response.data.competitions;
                   setAllLeagues(data);
               })
       }
    }, [])

    useEffect(() => {
        handleSelect();
    }, [allLeagues]);


    //console.log(filteredByRegion)

    return (
        <div>
            <CustomSelect onChange={handleSelect} />
            <Wrapper>
                {
                    filteredByRegion.map(item => {
                        const info = {
                            emblemUrl: item.emblemUrl,
                            name: item.name,
                            region: item.area.name,
                            code: item.code,
                        }
                        return <LeagueItem key={item.id} onClick={() => navigate(`/leagues/${item.code}`, {replace: false})} {...info}  />
                    })
                }
            </Wrapper>
        </div>
        
        
        
    );
};
