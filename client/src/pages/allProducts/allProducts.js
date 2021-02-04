
import ProductBlock from "../../components/productBlock"
import React from "react"
function AllProducts(){
    let products = [
        {
            img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            name: "Lego Heads1",
            price: "$1000"
        },
        {
            img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            name: "Lego Heads2",
            price: "$1000"
        },
        {
            img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            name: "Lego Heads3",
            price: "$1000"
        },
        {
            img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            name: "Lego Heads4",
            price: "$1000"
        },
        {
            img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            name: "Lego Heads5",
            price: "$1000"
        },
        {
            img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            name: "Lego Heads67",
            price: "$1000"
        },
        {
            img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            name: "Lego Heads7",
            price: "$1000"
        }
    ]
    return(
        <div>

            <a name="#"></a>
            <div class="container">
            <h3 style = {{textAlign:"center"}}>All Products</h3>
                <div class="row pt-5 pb-5 text-center justify-content-center">
                    
                    {products.map(product => (
                        <ProductBlock
                        key = {product.name}
                        price = {product.price}
                        img = {product.img}
                        name = {product.name}
                        />
                    ))}
                        
                </div>

            </div>
        </div>


    
    )
};
export default AllProducts;