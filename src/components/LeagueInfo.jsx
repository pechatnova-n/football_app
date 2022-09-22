import React, {useEffect, useState} from 'react';
import {getMatches} from "../api/config";
import {useFetching} from "./hooks/useFetching";
import {Loader} from "./utils/Loader/Loader";
import {MatchRow} from "./MatchRow";

export const LeagueInfo = (props) => {
    const {
        name,
        seasons,
    } = props;

    const [matches, setMatches] = useState([]);

    const [fetchGetMatches, isLoading, error] = useFetching(async () => {
        const response = await getMatches(props.id);
        setMatches(response.data.matches);
    })

    useEffect(() => {
        fetchGetMatches();
    }, []);


    return (
                <div>
                    <div className="title">{name} ({props?.area?.name ? props.area.name : "Регион не указан" }) </div>

                    <>
                        {isLoading ?
                            <Loader /> :
                            <div>
                               <div className="text">
                                   <div>Старт сезона: {seasons ? seasons[0].startDate.split("-").reverse().join("-") : ''}</div>
                                   <div>Конец сезона: {seasons ? seasons[0].endDate.split("-").reverse().join("-"): ''}</div>
                                   <div>Текущий день матча: {seasons ? seasons[0].currentMatchday : ''}</div>
                               </div>
                                <div>
                                        <div className='title'>Турнирная таблица</div>
                                        <div>
                                            {matches ? matches.map(m => {
                                                let dataDayCommon = m.utcDate.split("T");
                                                let dataDay = dataDayCommon[0].split('-').reverse().join('-');
                                                let time = dataDayCommon[1].slice(0, -4);
                                                const data = {
                                                    id: m.id,
                                                    name: m.stage,
                                                    awayTeam: m.awayTeam.name,
                                                    homeTeam: m.homeTeam.name,
                                                    status: m.status,
                                                    dataDay: dataDay,
                                                    time: time,
                                                    score: m.score,
                                                }
                                                return <MatchRow key={m.id} {...data} />
                                            }) : ''}
                                        </div>
                                    </div>

                            </div>
                        }
                    </>
                </div>
    );
};

