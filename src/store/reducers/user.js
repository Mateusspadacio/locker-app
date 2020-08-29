import { LOGIN, LOGIN_ERROR, SIGNUP } from '../actions/actionTypes';

const initialState = {
    email: '',
    password: '',
    cpf: '',
    born: ''
}

const user = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return action.payload;
        case LOGIN_ERROR:
            return { errors: { ...action.payload } }
        case SIGNUP:
            return action.payload;
        default:
            return state;
    }
};

export default user;
