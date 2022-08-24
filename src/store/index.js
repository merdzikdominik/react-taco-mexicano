import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dishesReducer from './reducers/dishesReducer';

const dishesPersistConfig = {
    key: 'dishes',
    storage
};

const persistedDishesReducer = persistReducer(dishesPersistConfig, dishesReducer);

export const store = createStore(persistedDishesReducer);
export const persistor = persistStore(store);