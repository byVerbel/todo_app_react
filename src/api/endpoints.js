import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
const GET_URL = `${BASE_URL}/to_dos`;
const POST_URL = `${BASE_URL}/to_dos`;

export const get_to_dos = async () => {
    const response = await axios.get(GET_URL);
    return response.data;
}

export const post_to_do = async (name) => {
    const response = await axios.post(POST_URL, { 'name': name, 'completed': false });
    return response.data;
}