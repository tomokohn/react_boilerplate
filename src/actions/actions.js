import axios from 'axios';
import { COMMAND } from './types';

const SERVER_URL = '';

export const getComments = () => dispatch => {
    
    axios.get(SERVER_URL).then(res =>
        dispatch({
            type: COMMAND,
            payload: res.data
        })

    )
    .catch(error => alert('Server error'));
};
