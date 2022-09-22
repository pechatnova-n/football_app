import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {LeagueItem} from "./LeagueItem";
import {getLeagues} from "../api/config";
import {useNavigate} from "react-router";
import {TemplateSelect} from "./Controls/TemplateSelect";


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
    const [region, setRegion] = useState('');
    const options = [
        { value: 'Asia', label: 'Азия' },
        { value: 'Africa', label: 'Африка' },
        { value: 'Australia', label: 'Австралия' },
        { value: 'Europe', label: 'Европа' },
        { value: 'World', label: 'Мир' },
        { value: 'Oceania', label: 'Океания' },
        { value: 'N/C America', label: 'Северная Америка' },
        { value: 'South America', label: 'Южная Америка' },
    ]

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


    return (
        <div>
            <TemplateSelect
                valueState={region}
                setValueState={setRegion}
                onChange={handleSelect}
                options={options}
                placeholder='Выберите регион'
            />
            <Wrapper>
                {filteredByRegion.map(item => {
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

