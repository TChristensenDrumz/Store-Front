import React from "react";
import Jumbo from "../../components/Jumbotron";
import About from "../../components/About";
import Preview from "../../components/Preview";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function StoreLanding() {
  const params = useParams();
  const stores = useSelector(state => state.stores);
  const selectedStore = stores.allStores.filter(store => store.id == params.storeId)[0];
  let products = selectedStore.Products;
  if (products.length > 3) {
    products = products.splice(0, 3);
  }

    const styles= {
        popular: {
            paddingTop: "10vh",
            paddingBottom: "10vh"
        }
    }
  return (
    <div>
      <Jumbo 
        image={selectedStore.background_image}
        name={selectedStore.store_name}
        tagline={selectedStore.tagline}
        font={selectedStore.font}
        taglineColor={selectedStore.font_color}
        buttonColor={selectedStore.accent_color}
        buttonTextColor={selectedStore.footer_color}
        bg_scroll={selectedStore.bg_scroll}
        body_color={selectedStore.body_color}
        storeId={selectedStore.id}
      />
      <div style={styles.popular}>
        <h1 className="text-center">Popular Items</h1>
        <div className="row d-flex justify-content-center">
          {products.map(product => (
            <Preview
              image={product.image}
              name={product.name}
              productId={product.id}
              storeId={product.StoreId}
              type="product"
              key={product.id}
            />
          ))}
        </div>
      </div>
      <About 
        image={selectedStore.about_image}
        info={selectedStore.about}
        color={selectedStore.body_color}
      />
    </div>
  );
}

export default StoreLanding;
