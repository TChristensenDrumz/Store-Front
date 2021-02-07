
import Preview from "../../components/Preview/Preview";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function AllProducts(){
    const { currentStore } = useSelector(state => state.stores);
    const {Products} = currentStore;
    const [details, setDetails] = useState(null);

    const checkDetails = () => {
        setDetails(currentStore);
    }

    useEffect(() => {
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
            <div style={{color: currentStore.body_color}}>
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
            <Footer />
        </div>


    
    )
};
export default AllProducts;