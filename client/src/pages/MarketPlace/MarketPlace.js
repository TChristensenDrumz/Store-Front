import React, { useState } from 'react';
import api from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getAllStores } from "../../redux/actions/stores.actions";

function MarketPlace() {
    const stores = useSelector(state => state.stores);
    return (
        <div>
            
        </div>
    )
}

export default MarketPlace;
