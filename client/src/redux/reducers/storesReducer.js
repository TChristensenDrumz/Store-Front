const storesReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case "GET_STORE_INFO":
            return action.payload;
        case "POPULATE_ALL_STORES":
            newState = {
                ...state,
                allStores: action.payload,
              };
            return newState;
        case "GET_OWNERS_STORE":
            newState = {
                ...state,
                ownerStore: action.payload
            };
            return newState;
        case "GET_CURRENT_STORE":
            newState = {
                ...state,
                currentStore: action.payload
            };
            return newState;
        default:
            return state;
    }
};

export default storesReducer;