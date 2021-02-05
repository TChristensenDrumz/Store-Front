import { getOwnerStore } from "../redux/actions/stores.actions";
import api from "./api";
import { useDispatch } from "react-redux";

const HandleStoreUpdate = (storeId, userId, storeData) => {
  const dispatch = useDispatch();
  api.updateStore(storeId, { ...storeData }).then((result) => {
    console.log(result);
    api.getStoreByOwner(userId).then((data) => {
      dispatch(getOwnerStore(data.data));
    });
  });
};

export default HandleStoreUpdate;