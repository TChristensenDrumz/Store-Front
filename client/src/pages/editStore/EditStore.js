import React, { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreDetails from "../../components/storeEdit/StoreDetails";
import Font from "../../components/storeEdit/Font";
import Colors from "../../components/storeEdit/Colors";
import BackgroundImages from "../../components/storeEdit/BackgroundImages";
import ProductUpload from "../../components/storeEdit/ProductUpload";
import Products from "../../components/storeEdit/Products";
import DeleteStore from "../../components/storeEdit/DeleteStore";


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