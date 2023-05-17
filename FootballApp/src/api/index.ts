import axios from "axios";

const BASE_URL = 'https://newsapi.org/v2/';

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'X-Api-key': '1d1e5fee368f4609b657d30e24f7921d',
    },
});