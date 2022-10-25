import React from 'react';
import { Link } from 'react-router-dom';

/* Add product page header */
function AddProductHeader () {
    return(
        <header className="header-section">
            <div className="container flex-grow-1 d-flex mt-4">
                <div className="w-100 d-flex justify-content-between mt-3 top">
                    <div className="d-flex justify-content-start align-items-start py-2">
                        <span className="product-title">Product Add</span>
                    </div>
                    <div className="ms-auto group-button  d-flex justify-content-between align-items-start py-2">
                        <button type="submit" form="product_form" className="btn btn-sm btn-default product-button-inline mx-2">Save</button>
                        <Link to="/" id="cancel" className="btn btn-sm btn-default product-button text-nowrap"> Cancel</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AddProductHeader;