import { LOGIN } from '../actions/actionTypes';

const initialState = {
    // some initial data
}

const user = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return action.payload;
        default:
            return state;
    }
};

export default user;
