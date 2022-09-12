import axios from 'axios';

const options = {
    method: 'GET',
    headers: {
        'X-Auth-Token': '6514a50db6064d86a774da3072668946'
    }
}
const BASE_URL = 'https://api.football-data.org/v2/';


export const getLeagues = () => {
    return axios.get(`${BASE_URL}competitions/`, options);
}

export const searchByLeague = (name) => {
    return axios.get(`${BASE_URL}competitions/${name}`, options);
}

export const getMatches = (id) => {
    return axios.get(`${BASE_URL}competitions/${id}/matches`, options);
}

export const getTeams = () => {
    return axios.get(`${BASE_URL}teams`, options);
}












