import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from 'redux-devtools-extension';
import storesReducer from "../reducers/storesReducer";

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, storesReducer);

const store = createStore(
    combineReducers({
        stores: persistedReducer
    }), composeWithDevTools()
);

const persistor = persistStore(store);

// const configureStore = () => {
//     const store = createStore(
//         combineReducers({
//             stores: storesReducer
//         }),composeWithDevTools()
//     );
//     return store;
// };

export {store, persistor};