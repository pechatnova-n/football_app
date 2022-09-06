import React, {useEffect, useState} from 'react';
import {LeagueInfo} from "./LeagueInfo";
import {useNavigate, useParams} from "react-router";
import {searchByLeague} from "../api/config";

export const LeagueDetail = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const [league, setLeague] = useState(null);

    useEffect(() => {
        searchByLeague(name).then(
            ({data}) => console.log(data)
        )
    }, [name])

    return (
        <div>
            <LeagueInfo />
        </div>
    );
};

