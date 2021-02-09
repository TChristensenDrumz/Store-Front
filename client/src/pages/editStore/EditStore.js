import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import StoreDetails from "../../components/storeEditor/StoreDetails";
import Font from "../../components/storeEditor/Font";
import Colors from "../../components/storeEditor/Colors";
import BackgroundImages from "../../components/storeEditor/BackgroundImages";
import ProductUpload from "../../components/storeEditor/ProductUpload";
import Products from "../../components/storeEditor/Products";
import DeleteStore from "../../components/storeEditor/DeleteStore";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import Token from "../../utils/Token";
import { getCurrentStore, getOwnerStore } from "../../redux/actions/stores.actions";
import "./EditStore.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function EditStore() {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(<StoreDetails />);
  const [details, setDetails] = useState(null);
  const [customFont, setCustomFont] = useState("");
  const [headerColor, setHeaderColor] = useState("");
  const [footerColor, setFooterColor2] = useState("");
  const [footerBg, setFooterBg] = useState("");

  const getOwnerDetails = () => {
    const userId = Token.getId();
    api.getStoreByOwner(userId).then(async (storeData) => {
      await dispatch(getOwnerStore(storeData.data));
      setDetails(storeData.data);
      dispatch(getCurrentStore(storeData.data));
    });
  };
  useEffect(() => {
    if (!details) {
      getOwnerDetails();
    }
  }, [details]);

  if (!details) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Header 
        customFont={customFont}
        headerColor={headerColor}
      />
      <div className="container border rounded" id="space">
        <div className="row pb-5">
          <div className="col-4 p-0">
            <ListGroup variant="flush" className="border-right rounded borderClass">
              <ListGroup.Item onClick={() => setEdit(<StoreDetails />)}>
                Store Details
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setEdit(<Font 
                setCustomFont={setCustomFont}
                setHeaderColor={setHeaderColor}
                setFooterColor2={setFooterColor2}
              />)}>
                Font
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setEdit(<Colors setFooterBg={setFooterBg}/>)}>
                Colors
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setEdit(<BackgroundImages />)}>
                Background Images
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setEdit(<ProductUpload />)}>
                Product Upload
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setEdit(<Products />)}>
                Products
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setEdit(<DeleteStore />)}>
                Delete Store
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-8">{edit}</div>
        </div>
      </div>
      <Footer 
        customFont={customFont}
        footerColor={footerColor}
        footerBg={footerBg}
      />
    </div>
  );
}

export default EditStore;
