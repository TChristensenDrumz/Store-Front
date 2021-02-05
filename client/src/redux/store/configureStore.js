import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            // stores: storesReducer
        }),composeWithDevTools()
    );
    return store;
};

export default configureStore;