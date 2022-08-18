import { createStore } from 'redux';
// import reducers from './reducers';
import dishesReducer from './reducers/dishesReducer'

// const initialState = {
//     dishes: []
// };

const store = createStore(dishesReducer);

export default store;