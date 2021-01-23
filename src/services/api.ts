import axios from 'axios';
import { Toast } from 'native-base';

const api = axios.create({
    baseURL: 'http://www.mocky.io/v2/5e76797e2f0000f057986099'
})


export const get = async (endpoint: string) => {
    return await api
        .get(endpoint)
        .then((data) => {
            return data.data.response.data
        })
        .catch(() => {
            throw "Não foi fazer a consulta!"
        });
}

export default api;