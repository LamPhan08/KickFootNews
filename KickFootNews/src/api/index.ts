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
    headers: {
      'X-RapidAPI-Key': 'be8e64dbb19c2307cab1d4d00d62dccb',
      'X-RapidAPI-Host': 'v3.football.api-sports.io'
    }
})

