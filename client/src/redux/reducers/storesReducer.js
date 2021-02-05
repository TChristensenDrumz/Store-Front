const storesReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_STORE_INFO":
            return action.payload;
        case "POPULATE_ALL_STORES":
            const newState = {
                ...state,
                allStores: action.payload,
              }
            return newState;
        default:
            return state;
    }
};

export default storesReducer;