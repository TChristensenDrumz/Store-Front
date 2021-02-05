import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import storesReducer from "../reducers/storesReducer";

const configureStore = () => {
    const store = createStore(
        combineReducers({
            stores: storesReducer
        }),composeWithDevTools()
    );
    return store;
};

export default configureStore;