import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dishesReducer from './reducers/dishesReducer';
// import fetchCacheReducer from './reducers/fetchCacheReducer';

const dishesPersistConfig = {
    key: 'dishes',
    storage
};

const persistedDishesReducer = persistReducer(dishesPersistConfig, dishesReducer);

export const store = createStore(persistedDishesReducer);
export const persistor = persistStore(store);