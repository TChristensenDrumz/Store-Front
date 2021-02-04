function Product(){

    let name = "Product 1"
    let price = "$500"
    let description = "A thing"
    let inStock = true
    

    if(inStock){

    
        return(
        <div>
        <a name="#"></a>
           <div className="container mt-5">
               <div className="row p-5">
                   <div className="col-6">
                       <img src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height = "300px"></img>

                   </div>
                   <div className="col-6">
        
                       <div className="row">
                           <h3>{name}</h3>
                       </div>
        
                       <div className="row">
                           <h6>{price}</h6>
                       </div>
        
                       <div className="row">
                           <p>{description }</p>
                       </div>
                        <div>

                        </div>
                           <div className="row pb-3">
                           <div className="input-group">
                               <input type="text" className="form-control text-center" id="prod-quantity" value="1" aria-label="Recipient's username with two button addons" onChange = {}></input>
                               <button onClick = {console.log(document.getElementById("#prod-quantity"))} className="btn btn-outline-secondary" id="add" type="button">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                       <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                   </svg>
                               </button>
                               <button className="btn btn-outline-secondary" id="subtract" type="button">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                       <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                   </svg>
                               </button>
                             </div>
                       </div> 
        
                       <div className="row pt-3">
                           <button type="button" className="btn btn-lg border button-color" id="prod-cart" data-userid="{{ userid }}" data-productid="{{ productid }}" data-stock="{{ stock }}">Add to Cart</button>
                       </div>
                   </div>
               </div>
           </div>
   
       
        </div>
        )
    }else{
        return(
            <div>
                <a name="#"></a>
                <div className="container mt-5">
                    <div className="row p-5">
                        <div className="col-6">
                            <img src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height = "300px"></img>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <h3>{name}</h3>
                            </div>
                            <div className="row">
                                <h6>{price}</h6>
                            </div>
                            <div className="row">
                                <p>{description }</p>
                            </div>
                             <div>
                             </div>
                             <div className="row">
                                 <p className="text-muted">This item is currently out of stock.</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Product

                    