import React from "react"
import { Link } from "react-router-dom"
function ProductBlock(props){

    let name = props.name
    let img = props.img
    let price = props.price

    return(
        <div class="col-4">
            <Link to=""><img src= {img} height = "300px" alt="Your Name" class="prod-pic"></img></Link>
            <h5 class="m-0 pt-2">{name}</h5>
            <h6>{price}</h6>
        </div>
    )
};

export default ProductBlock
