import React from 'react';

function ProductEditor() {
    return (
        <div>
            <div className="row align-items-center p-3">
                <div className="col-2">
                    <i className="fas fa-times"></i>
                </div>
                <div className="col-3">
                    <img src="https://placehold.it/100x100" className="mr-3" alt="..." />
                </div>
                <div className="col">Product Name</div>
            </div>
        </div>
    );
}

export default ProductEditor;
