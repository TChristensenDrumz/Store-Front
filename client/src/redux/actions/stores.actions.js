export const getStoreInfo = (payload) => {
    return { type: "GET_STORE_INFO", payload};
};

export const getAllStores = (payload) => {
    return { type: "POPULATE_ALL_STORES", payload};
};

export const getOwnerStore = (payload) => {
    return { type: "GET_OWNERS_STORE", payload};
};