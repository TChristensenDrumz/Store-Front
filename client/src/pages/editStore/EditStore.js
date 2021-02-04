import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


function EditStore() {
    const styles= {

    }
  return (
    <div>
        <div className="container border rounded" id="space">
            <div className="row">
                <div className="col-4 p-0">
                    <ListGroup variant="flush" className="border-right rounded">
                        <ListGroup.Item action href="/details">Store Details</ListGroup.Item>
                        <ListGroup.Item>Font</ListGroup.Item>
                        <ListGroup.Item>Colors</ListGroup.Item>
                        <ListGroup.Item>Background Images</ListGroup.Item>
                        <ListGroup.Item>Product Upload</ListGroup.Item>
                        <ListGroup.Item>Products</ListGroup.Item>
                        <ListGroup.Item>Delete Store</ListGroup.Item>
                    </ListGroup>
                    <div className="list-group list-group-flush border-right rounded" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-store-list" data-toggle="list"
                            href="#list-store" role="tab" aria-controls="store">Store Details</a>
                        <a className="list-group-item list-group-item-action" id="list-font-list" data-toggle="list"
                            href="#list-font" role="tab" aria-controls="font">Font</a>
                        <a className="list-group-item list-group-item-action" id="list-colors-list" data-toggle="list"
                            href="#list-colors" role="tab" aria-controls="colors">Colors</a>
                        <a className="list-group-item list-group-item-action" id="list-background-list" data-toggle="list"
                            href="#list-background" role="tab" aria-controls="background">Background Images</a>
                        <a className="list-group-item list-group-item-action" id="list-products-list" data-toggle="list"
                            href="#list-product-upload" role="tab" aria-controls="productUpload">Product Upload</a>
                        <a className="list-group-item list-group-item-action" id="list-products-list" data-toggle="list"
                            href="#list-products" role="tab" aria-controls="products">Products</a>
                        <a className="list-group-item list-group-item-action border-bottom" id="list-delete-list" data-toggle="list"
                            href="#list-delete" role="tab" aria-controls="products">Delete Store</a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-store" role="tabpanel" aria-labelledby="list-home-list">

                            <form className="col-12 p-4" id="store-details-form">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Store Name</label>
                                    <input type="storeName" className="form-control" id="storeName" placeholder="Store Name"
                                        value="{{ name }}"/>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Store Tagline</label>
                                    <input type="storeDetails" className="form-control" id="storeTagline"
                                        placeholder="Store Tagline"/>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">About</label>
                                    <textarea className="form-control" id="aboutDetails" placeholder="About Us" rows="3"></textarea>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Store Address</label>
                                    <input type="storeAddress" className="form-control" id="storeAddress"
                                        placeholder="Store Address"/>
                                </div>

                                <div className="text-right">
                                    <button type="submit" className="btn button-color">Update</button>
                                </div>

                                <div className="text-right updateStatus"></div>
                            </form>
                        </div>

                        <div className="tab-pane fade" id="list-font" role="tabpanel" aria-labelledby="list-profile-list">
                            <form className="col-12 p-4" id="font-form">
                                <label for="exampleFormControlInput1">Font</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="font-select">
                                        <option selected>Choose...</option>
                                        <option className="helvetica" value="helvetica neue">Helvetica Neue</option>
                                        <option className="ibm" value="IBM Plex Sans">IBM Plex Sans</option>
                                        <option className="julius" value="Julius Sans One">Julius Sans One</option>
                                        <option className="lora" value="Lora">Lora</option>
                                        <option className="bungee" value="Bungee">Bungee</option>
                                        <option className="creepster" value="Creepster">Creepster</option>
                                    </select>

                                    <div className="input-group-append">
                                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Header Font Color</label>
                                    <input type="color" className="form-control color-form" id="headerFontColor"
                                        value="{{ header_font_color }}"/>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Body Font Color</label>
                                    <input type="color" className="form-control color-form" id="bodyFontColor"
                                        value="{{ body_font_color }}"/>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Footer Font Color</label>
                                    <input type="color" className="form-control color-form" id="footerFontColor"
                                        value="{{ footer_font_color }}"/>
                                </div>

                                <div className="text-right">
                                    <button type="submit" className="btn button-color">Update</button>
                                </div>

                                <div className="text-right updateStatus">

                                </div>
                            </form>
                        </div>

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