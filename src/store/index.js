import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dishesReducer from './reducers/dishesReducer';
import hamburgerReducer from './reducers/hamburgerReducer';

const dishesPersistConfig = {
    key: 'dishes',
    storage
};

const persistedDishesReducer = persistReducer(dishesPersistConfig, dishesReducer);

const reducers = {
    dishesReducer: persistedDishesReducer,
    hamburgerReducer
};

export const store = createStore(combineReducers(reducers));
export const persistor = persistStore(store);