import axios from "axios";

const BASE_URL = 'https://newsapi.org/v2/';


export const apiClient = axios.create({
    baseURL: BASE_URL,
    params: {
        per_page: 10
    },
    headers: {
        'X-Api-key': '1d1e5fee368f4609b657d30e24f7921d',
    },
});

export const matchApi = axios.create({
    baseURL: 'https://v3.football.api-sports.io/',
    // params: {date: '2021-01-29'},
    headers: {
      'X-RapidAPI-Key': '0e97f76fedmsh0633126664172a6p19a263jsn4e8543b8eeb8',
      'X-RapidAPI-Host': 'v3.football.api-sports.io'
    }
})