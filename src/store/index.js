import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    dishes: []
};

const store = createStore(reducers, initialState);

export default store;