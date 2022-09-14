import React, {useEffect, useState} from 'react';
import {getTeams} from "../api/config";
import styled from 'styled-components';
import {TeamItem} from "./TeamItem";
import {useFetching} from "./hooks/useFetching";
import {Loader} from "./utils/Loader/Loader";
import {useNavigate} from "react-router";

const Wrapper = styled.section`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   row-gap: 20px;
   column-gap: 20px;
`


export const TeamsList = () => {
    const navigate =  useNavigate();
    const [teams, setTeams] = useState([]);

    const [fetchGetTeams, isLoading, error] = useFetching(async () => {
        const response = await getTeams();
        setTeams(response.data.teams);
    })

    useEffect(() => {
        fetchGetTeams();
    }, []);

    return (
        <div>
            <div className="title">Список команд</div>
            {isLoading
                ? <Loader />
                : <Wrapper>
                    {teams.map(t => {
                        const info = {
                            id: t.id,
                            name: t.name,
                            area: t.area.name,
                            flag: t.crestUrl,
                            website: t.website
                        }
                        return <TeamItem key={t.id} onClick={() => navigate(`/teams/${t.id}`, {replace: false})} {...info} />
                    })}
                </Wrapper>
            }
        </div>
    );
};

