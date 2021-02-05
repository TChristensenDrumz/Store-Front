import React from "react";
import Jumbo from "../../components/Jumbotron";
import About from "../../components/About";
import Preview from "../../components/Preview";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function StoreLanding() {
  const params = useParams();
  console.log(params.storeId);
  const stores = useSelector(state => state.stores);
  console.log(stores)
  const selectedStore = stores.allStores.filter(store => store.id == params.storeId);
  console.log(selectedStore)
    const styles= {
        popular: {
            paddingTop: "10vh",
            paddingBottom: "10vh"
        }
    }
  return (
    <div>
      <Jumbo 
        image={selectedStore[0].background_image}
        name={selectedStore[0].store_name}
        tagline={selectedStore[0].tagline}
      />
      <div style={styles.popular}>
        <h1 className="text-center">Popular Items</h1>
        <div className="row d-flex justify-content-center">
          <Preview />
          <Preview />
          <Preview />
        </div>
      </div>
      <About />
    </div>
  );
}

export default StoreLanding;
