import axios from 'axios';
import { LOGIN } from './actionTypes';

export const login = () => {
    return async dispatch => {
        // silly endpoint
        const data = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto/');
        return dispatch({
            type: LOGIN,
            payload: data
        });
    }
}
