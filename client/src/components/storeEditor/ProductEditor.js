import React from "react";
import api from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getOwnerStore } from "../../redux/actions/stores.actions";

function ProductEditor({ image, name, id }) {
  const dispatch = useDispatch();
  const { ownerStore } = useSelector((state) => state.stores);

  const deleteProduct = () => {
    api.deleteProduct(id).then((result) => {
      api.getStoreByOwner(ownerStore.UserId).then((data) => {
        dispatch(getOwnerStore(data.data));
      });
    });
  };

  const styles = {
    product: {
      height: "100px",
      width: "100px",
    },
    button: {
      background: "none",
      border: "none",
    },
  };
  return (
    <div>
      <div className="row align-items-center p-3">
        <div className="col-2">
          <button style={styles.button} onClick={deleteProduct}>
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="col-3">
          <img src={image} className="mr-3" alt="..." style={styles.product} />
        </div>
        <div className="col">{name}</div>
      </div>
    </div>
  );
}

export default ProductEditor;
