import axios from "axios";

export default {
    // Route to get all store data for landing page
    landingStores: function() {
        return axios.get("/api/storefront/allStores");
    },
    //=======================================================
    // Routes for user data
    register: function(userData) {
        return axios.post("/api/user/register", userData);
    },

    login: function(userData) {
        return axios.post("/api/user/login", userData);
    },
    //========================================================
    // Routes for store data
    getStoreInfo: function(storeId) {
        return axios.get("/api/store/" + storeId);
    },

    createStore: function(storeData) {
        return axios.post("/api/store/create", storeData);
    },

    updateStore: function(storeId, storeData) {
        return axios.put("/api/store/update/" + storeId, storeData);
    },

    deleteStore: function(storeId) {
        return axios.delete("/api/store/delete/" + storeId);
    },
    //========================================================
    // Routes for product data
    getStoreProducts: function(storeId) {
        return axios.get("/api/product/" + storeId);
    },

    getSingleProduct: function(productId) {
        return axios.get("/api/product/singleProduct/" + productId);
    },

    createProduct: function(productData) {
        return axios.post("/api/product/create", productData);
    },

    deleteProduct: function(productId) {
        return axios.delete("/api/product/" + productId);
    },
    //========================================================
    // Routes for cart data
    getCart: function(userId) {
        return axios.get("/api/cart/" + userId);
    },

    addItem: function(itemData) {
        return axios.post("/api/cart/addItem", itemData);
    },

    removeItem: function(itemId) {
        return axios.delete("/api/cart/" + itemId);
    },
    //========================================================
    // Route for image upload
    uploadImage: function(imageType, id, imageData) {
        return axios.post("api/image/" + imageType + "/" + id, imageData);
    }
}