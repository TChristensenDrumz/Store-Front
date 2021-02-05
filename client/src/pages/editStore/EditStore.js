import React, { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreDetails from "../../components/storeEditor/StoreDetails";
import Font from "../../components/storeEditor/Font";
import Colors from "../../components/storeEditor/Colors";
import BackgroundImages from "../../components/storeEditor/BackgroundImages";
import ProductUpload from "../../components/storeEditor/ProductUpload";
import Products from "../../components/storeEditor/Products";
import DeleteStore from "../../components/storeEditor/DeleteStore";


function EditStore() {
    const [edit, setEdit] = useState(<StoreDetails />);

  return (
    <div>
        <div className="container border rounded" id="space">
            <div className="row">
                <div className="col-4 p-0">
                    <ListGroup variant="flush" className="border-right rounded">
                        <ListGroup.Item onClick={() => setEdit(<StoreDetails />)}>Store Details</ListGroup.Item>
                        <ListGroup.Item onClick={() => setEdit(<Font />)}>Font</ListGroup.Item>
                        <ListGroup.Item onClick={() => setEdit(<Colors />)}>Colors</ListGroup.Item>
                        <ListGroup.Item onClick={() => setEdit(<BackgroundImages />)}>Background Images</ListGroup.Item>
                        <ListGroup.Item onClick={() => setEdit(<ProductUpload />)}>Product Upload</ListGroup.Item>
                        <ListGroup.Item onClick={() => setEdit(<Products />)}>Products</ListGroup.Item>
                        <ListGroup.Item onClick={() => setEdit(<DeleteStore />)}>Delete Store</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="col-8">
                    {edit}
                </div>
            </div>
        </div>
    </div>
  );
}

export default EditStore;