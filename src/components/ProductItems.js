import React from 'react';


function ProductItem(props){
    return (
        <div key={props.product.id} className="col-6 col-md-3 mb-3">
            <div className="card product-box">
                <div className="d-flex align-items-center justify-content-center inner-box">
                    <div className="form-check mt-2 check-form">
                        <input className="form-check-input" type="checkbox" id="delete-checkbox" value=""/>
                    </div>
                    <div className="d-flex align-items-center justify-content-center my-4 flex-column ">
                        <small className="card-text my-0">{props.product.sku}</small>
                        <small className="card-text my-0">{props.product.name}</small>
                        <small className="card-text my-0">{props.product.price} $</small>
                        <small className="card-text my-0">165 views - 58 hours ago</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  ProductItem;