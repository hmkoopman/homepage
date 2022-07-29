import axios from 'axios';

const url = 'https://api.chess.com/pub/puzzle';
const params = {
   
}
const headers = {
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