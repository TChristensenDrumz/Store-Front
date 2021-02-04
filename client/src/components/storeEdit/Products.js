import React from "react";

function Products() {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="list-products"
        role="tabpanel"
        aria-labelledby="list-settings-list"
      >
        <div className="col-12 p-4">
          <div className="row align-items-center">
            <div className="col-12">
              <label>Product List</label>
              <hr className="m-0 pb-4" />
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
          <div className="text-right updateStatus"></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
