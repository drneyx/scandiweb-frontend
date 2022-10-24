import React from 'react';
import { Link } from 'react-router-dom';

/* Product list header */
function ListHeader (props) {
        return (
            <>
            <header className="header-section">
                <div className="container flex-grow-1 d-flex mt-4">
                    <div className="w-100 d-flex justify-content-between mt-3 top">
                        <div className="d-flex justify-content-start align-items-start py-2">
                           <span className="product-title">Product List</span>
                        </div>
                        <div className="ms-auto group-button  d-flex justify-content-between align-items-start py-2">
                            <Link to="addProduct" className="btn btn-sm btn-default product-button-inline mx-2" id="addProduct"> 
                                <span>Add</span>
                            </Link>
                            
                            <button className="btn btn-sm btn-default product-button text-nowrap" id="delete-product-btn" onClick={props.submit}> Mass delete</button>
                        </div>
                    </div>
                </div>
            </header>
            </>
        )
}


export default ListHeader;