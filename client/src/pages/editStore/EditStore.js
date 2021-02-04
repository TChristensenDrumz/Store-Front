import React, { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreDetails from "../../components/storeEdit/StoreDetails";
import Font from "../../components/storeEdit/Font";


function EditStore() {
    const [edit, setEdit] = useState(<StoreDetails />);

    useEffect(() => {
        console.log("OK");
    }, [edit]);

  return (
    <div>
        <div className="container border rounded" id="space">
            <div className="row">
                <div className="col-4 p-0">
                    <ListGroup variant="flush" className="border-right rounded">
                        <ListGroup.Item onClick={() => setEdit(<StoreDetails />)}>Store Details</ListGroup.Item>
                        <ListGroup.Item onClick={() => setEdit(<Font />)}>Font</ListGroup.Item>
                        <ListGroup.Item>Colors</ListGroup.Item>
                        <ListGroup.Item>Background Images</ListGroup.Item>
                        <ListGroup.Item>Product Upload</ListGroup.Item>
                        <ListGroup.Item>Products</ListGroup.Item>
                        <ListGroup.Item>Delete Store</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="col-8">
                    {edit}
                    <div className="tab-content" id="nav-tabContent">
                        

                        

                        <div className="tab-pane fade" id="list-colors" role="tabpanel" aria-labelledby="list-messages-list">
                            <form className="col-12 p-4" id="color-form">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Store Color</label>
                                    <input type="color" className="form-control color-form" id="storeColor"
                                        value="{{ accent_color }}"/>
                                </div>

                                <div className=" text-right">
                                    <button type="submit" className="btn button-color">Update</button>
                                </div>

                                <div className="text-right updateStatus">

                                </div>
                            </form>
                        </div>

                        <div className="tab-pane fade" id="list-background" role="tabpanel" aria-labelledby="list-settings-list">
                            <form className="col-12 p-4" id="bg-image-form">
                                <label for="exampleFormControlInput1">Background Image</label>
                                <div className="input-group pb-3">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="bg-image"
                                            aria-describedby="inputGroupFileAddon04"/>
                                        <label className="custom-file-label" for="bg-image" id="bg-edit-name">Choose file</label>
                                    </div>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary button-color" type="button"
                                            id="bg-image-upload">Upload</button>
                                    </div>
                                </div>

                                <label for="exampleFormControlInput1">Scroll Behavior</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="bg-scroll">
                                        <option selected>Choose...</option>
                                        <option value="scroll">Scroll</option>
                                        <option value="fixed">Fixed</option>
                                    </select>
                                    <div className="input-group-append">
                                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                                    </div>
                                </div>

                                <label for="exampleFormControlInput1">About Image</label>
                                <div className="input-group mb-3">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="about-image"
                                            aria-describedby="inputGroupFileAddon04"/>
                                        <label className="custom-file-label" for="about-image" id="about-edit-name">Choose
                                            file</label>
                                    </div>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary button-color" type="button"
                                            id="about-image-upload">Upload</button>
                                    </div>
                                </div>

                                <label for="exampleFormControlInput1">Scroll Behavior</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="about-scroll">
                                        <option selected>Choose...</option>
                                        <option value="scroll">Scroll</option>
                                        <option value="fixed">Fixed</option>
                                    </select>
                                    <div className="input-group-append">
                                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn button-color" id="scroll-submit">Update</button>
                                </div>

                                <div className="text-right updateStatus">

                                </div>
                            </form>
                        </div>

                        <div className="tab-pane fade" id="list-product-upload" role="tabpanel"
                            aria-labelledby="list-settings-list">
                            <form className="col-12 p-4" id="prod-form">
                                <div className="form-group" id="product-form">
                                    <label for="exampleFormControlInput1">Product Name</label>
                                    <input type="text" className="form-control" id="productName" placeholder="Name"/>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Price</label>
                                    <input type="text" className="form-control" id="price" placeholder="$"/>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Inventory</label>
                                    <input type="text" className="form-control" id="inventory" placeholder="#"/>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control" id="productDescription" placeholder="Product description"
                                        rows="3"></textarea>
                                </div>

                                <label for="exampleFormControlInput1">Product Image</label>
                                <div className="input-group mb-3">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="prod-image-upload"/>
                                        <label className="custom-file-label" for="prod-image-upload"
                                            aria-describedby="inputGroupFileAddon02" id="prod-image-file">Choose file</label>
                                    </div>
                                    {/* {{!-- <div className="input-group-append">
                                        <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                    </div> --}} */}
                                </div>

                                <div className="text-right">
                                    <button type="submit" className="btn button-color">Update</button>
                                </div>

                                <div className="text-right updateStatus">

                                </div>
                            </form>
                        </div>

                        <div className="tab-pane fade" id="list-products" role="tabpanel" aria-labelledby="list-settings-list">
                            <div className="col-12 p-4">
                                <div className="row align-items-center">
                                    <div className="col-12">
                                        <label>Product List</label>
                                        <hr className="m-0 pb-4"/>
                                    </div>
                                </div>
                                {/* {{#if hasProducts}}
                                {{#each products}}
                                {{> product/editor-block}}
                                {{/each}}
                                {{/if}} */}

                                {/* {{#unless hasProducts}} */}
                                <div className="row align-items-center">
                                    <p className="col-12">No items on file for this store</p>
                                </div>
                                {/* {{/unless}} */}
                                <div className="text-right updateStatus">

                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="list-delete" role="tabpanel" aria-labelledby="list-delete-list">
                            <form className="col-12 p-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Are you sure you want to delete your store?</label>
                                </div>
                                <div className="text-left">
                                    <button type="submit" className="btn btn-danger delete-store"
                                        data-storeid="{{ storeid }}">Delete</button>
                                </div>
                                <div className="text-right updateStatus">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EditStore;