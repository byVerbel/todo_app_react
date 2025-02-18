import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
const GET_URL = `${BASE_URL}/to_dos`;
const POST_URL = `${BASE_URL}/to_dos`;
const UPDATE_COMPLETED_URL = (id) => `${BASE_URL}/to_dos/${id}/update_completed`;
const DELETE_URL = (id) => `${BASE_URL}/to_dos/${id}`;

export const get_to_dos = async () => {
    const response = await axios.get(GET_URL);
    return response.data;
}

export const post_to_do = async (name) => {
    const response = await axios.post(POST_URL, { 'name': name, 'completed': false });
    return response.data;
}

export const update_completed_to_do = async (id, completed) => {
    const response = await axios.patch(UPDATE_COMPLETED_URL(id), { 'completed': completed });
    return response.data;
}

export const delete_to_do = async (id) => {
    const response = await axios.delete(DELETE_URL(id));
    return response.data;
}
