import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
const GET_URL = `${BASE_URL}/to_dos`;

const get_to_dos = async () => {
    const response = await axios.get(GET_URL);
    return response.data;
}

export { get_to_dos };