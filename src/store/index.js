import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dishesReducer from './reducers/dishesReducer';
import clickedReducer from './reducers/clickedReducer';

const dishesPersistConfig = {
    key: 'dishes',
    storage,
    blacklist: ['clickedReducer']
};

const persistedDishesReducer = persistReducer(dishesPersistConfig, dishesReducer);

const combinedReducers = {
    clickedReducer,
    dishesReducer: persistedDishesReducer
};

const reducer = combineReducers(combinedReducers);

// const reducers = combineReducers({
//     dishesReducer: persistedDishesReducer, 
//     clickedReducer});

// const reducers = combineReducers({
//     dishesReducer: persistedDishesReducer
// });

export const store = createStore(reducer);
// export const store = createStore(persistedDishesReducer);        working
export const persistor = persistStore(store);