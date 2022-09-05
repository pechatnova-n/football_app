import axios from 'axios';

export const getLeagues = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-Auth-Token': '6514a50db6064d86a774da3072668946'
        }
    }
    return axios.get('https://api.football-data.org/v2/competitions/', options)
}













