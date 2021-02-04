import React from "react"
function ProductBlock(props){

    let name = props.name
    let img = props.img
    let price = props.price

    return(
        <div class="col-4">
            <a href=""><img src= {img} height = "300px" alt="Your Name" class="prod-pic"></img></a>
            <h5 class="m-0 pt-2">{name}</h5>
            <h6>{price}</h6>
        </div>
    )
};

export default ProductBlock
