import React, {useEffect, useState} from 'react';
import {getMatches} from "../api/config";
import styled from 'styled-components';
import {useFetching} from "./hooks/useFetching";
import {Loader} from "./utils/Loader/Loader";
import {MatchRow} from "./MatchRow";

/*const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 2fr 5fr 3fr 1fr 3fr 2fr;
`
const Cell = styled.div``*/

/*export const Row = ({ dataDay, time, stage, homeTeam, score, awayTeam, status }) => {
    return (
        <Wrapper>
            <Cell>{dataDay} {time}</Cell>
            <Cell>{stage}</Cell>
            <Cell>{homeTeam.name}</Cell>
            <Cell>{score.fullTime.homeTeam} : {score.fullTime.awayTeam}</Cell>
            <Cell>{awayTeam.name}</Cell>
            <Cell>{status}</Cell>
        </Wrapper>
    )
}*/

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

    console.log(matches)
    return (
                <div>
                    <div className="title">{name} ({props?.area?.name ? props.area.name : "Регион не указан" }) </div>
                    <>
                        {isLoading ?
                            <Loader /> :
                            <div>
                                <div style={{'marginBottom': '20px'}}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>Старт сезона</td>
                                            <td>{seasons ? seasons[0].startDate.split("-").reverse().join("-") : ''}</td>
                                        </tr>
                                        <tr>
                                            <td>Конец сезона</td>
                                            <td>{seasons ? seasons[0].endDate.split("-").reverse().join("-"): ''}</td>
                                        </tr>
                                        <tr>
                                            <td>Текущий день матча</td>
                                            <td>{seasons ? seasons[0].currentMatchday : ''}</td>
                                        </tr>
                                        </tbody>
                                    </table>
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

/*<MatchRow key={m.id} {...data} />*/