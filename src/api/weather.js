import axios from 'axios';

const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/current';
const params = {
    lon: '6.86',
    lat: '53.13',
    units: 'metric', 
    lang: 'nl',
}
const headers = {
    'X-RapidAPI-Key': import.meta.env.VITE_XRAPIDAPIKEY_WEATHER,
    'X-RapidAPI-Host': import.meta.env.VITE_XRAPIDAPIHOST_WEATHER
}

export default {
    get() {
        return axios.get(
            url, 
            {
            headers: headers, 
            params: params
            }
        ).then(response => response.data);
    }
};