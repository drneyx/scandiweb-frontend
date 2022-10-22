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
                        {props.product.type === "DVD" && <small className="card-text my-0">Size: {props.product.size} MB</small>}
                        {props.product.type === "Book" &&  <small className="card-text my-0">Weight: {props.product.weight} kG</small>}
                        {props.product.type === "Furniture" && <small className="card-text my-0">Dimension: {props.product.height}x{props.product.width}x{props.product.length}</small>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  ProductItem;