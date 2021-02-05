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
        case "GET_OWNERS_STORE":
            const ownerStore = {
                ...state,
                ownerStore: action.payload
            }
            return ownerStore;
        default:
            return state;
    }
};

export default storesReducer;