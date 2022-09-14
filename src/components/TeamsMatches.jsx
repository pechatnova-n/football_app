import React, {useEffect, useState} from 'react';
import {Button} from "./Button";
import {IoArrowBack} from "react-icons/io5";
import {useNavigate, useParams} from "react-router";
import {getTeamMatches} from "../api/config";
import {MatchRow} from "./MatchRow";


export const TeamsMatches = () => {

    const {teamId} = useParams();
    const navigate = useNavigate();
    const [teamMatches, setTeamMatches] = useState([]);


    useEffect(() => {
        getTeamMatches(teamId).then(response => {
            setTeamMatches(response.data.matches);
        })
    }, [teamId])
    console.log(teamMatches)

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Назад
            </Button>
            <div className='title'>Календарь игр</div>
            <div>
                    {
                        teamMatches.map(m => {
                           let dataDayCommon = m.utcDate.split("T");
                           let dataDay = dataDayCommon[0].split('-').reverse().join('-');
                           let time = dataDayCommon[1].slice(0, -4);
                           const data = {
                               id: m.id,
                               name: m.competition.name,
                               awayTeam: m.awayTeam.name,
                               homeTeam: m.homeTeam.name,
                               status: m.status,
                               dataDay: dataDay,
                               time: time,
                               score: m.score,
                           }
                           return <MatchRow key={m.id} {...data} />
                       })
                    }
            </div>
        </div>
    );
};

