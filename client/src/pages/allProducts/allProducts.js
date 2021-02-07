
import Preview from "../../components/Preview/Preview";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
function AllProducts(){
    const { allStores } = useSelector(state => state.stores);
    console.log(allStores);
    const { storeId } = useParams();
    console.log(storeId);
    const {Products} = allStores.filter(store => store.id == storeId)[0];
    console.log(Products);
    const [details, setDetails] = useState(null);

    const checkDetails = () => {
        setDetails(allStores);
    }

    useEffect(() => {
        console.log("hello")
        if (!details) {
            checkDetails();
        }
    }, [details])

    if (!details) {
        return <h1>Loading...</h1>
    }
    return(
        <div>
            <Header />
            <a name="#"></a>
            <div >
            <h3 style = {{textAlign:"center"}}>All Products</h3>
                <div class="row pt-5 pb-5 text-center justify-content-center" style={{width: "75vw", margin: "0 auto"}}>
                    
                    {Products.map(Product => (
                        <Preview
                        key = {Product.id}
                        image = {Product.image}
                        name = {Product.name}
                        type="product"
                        storeId={Product.StoreId}
                        productId={Product.id}
                        />
                    ))}
                        
                </div>

            </div>
        </div>


    
    )
};
export default AllProducts;