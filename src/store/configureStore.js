import { createStore, combineReducers } from 'redux';
import { reducer } from './reducers';

// key value par reducers
const rootReducer = combineReducers({
    reducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
