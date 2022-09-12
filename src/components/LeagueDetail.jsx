import React, {useEffect, useState} from 'react';
import {LeagueInfo} from "./LeagueInfo";
import {IoArrowBack} from 'react-icons/io5';
import {useNavigate, useParams} from "react-router";
import {searchByLeague} from "../api/config";
import {Button} from "./Button";


export const LeagueDetail = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const [league, setLeague] = useState(null);


    useEffect(() => {
                searchByLeague(name).then(response => {
                    let data = response.data;
                    setLeague(data);
                })
    }, [name])


    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Назад
            </Button>

            {league ? <LeagueInfo {...league} /> : `Нет доступа к данным этой лиги`}
        </div>
    );
};

