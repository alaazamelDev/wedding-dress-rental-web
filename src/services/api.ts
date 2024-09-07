import axios from "axios";
import {Dress} from "../types/Dress.ts";

export const BASE_URL = 'http://localhost:8000';

// constants
const API_VERSION = 'v1';
const API_BASE_URL = `${BASE_URL}/api/${API_VERSION}`;
const ACCESS_TOKEN = `51|1g9vGmgIHB0PQg6XOstW6APVfDmHG3zaLq1S3K957c1bd773`;
const API_HEADERS = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${ACCESS_TOKEN}`
}
// api
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: API_HEADERS,
});

// Fetch list of dresses
export const fetchDresses = async (page: number = 1, perPage: number = 15): Promise<Dress[]> => {
    const response = await api.get('/dresses', {params: {page, per_page: perPage}});
    return response.data.data;
}

// Fetch dress details
export const fetchDressDetails = async (id: number): Promise<Dress> => {
    const response = await api.get(`/dresses/${id}`);
    return response.data.data;
}

// Reserve a dress by sending the dress ID and rental duration
export const reserveDress = async (dressId: number, duration: number): Promise<void> => {
    await api.post('/reservation/reserve', {
        dress_id: dressId,
        duration,
    });
};

export const getMyProfile = async () => {
    return await api.get('/auth/user');
}

export const getPreviousReservations = async () => {
    return await api.get('/users/my-reservations');
}

export default api;