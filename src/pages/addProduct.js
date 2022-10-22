import React from 'react';


function ProductAdd(){

    return (
        /*-- Add Product Section -- */
        <section className="content-section">
            <div className="container">
                <div className="w-100 content-section-products mt-2">
                    <form method="POST" id="product_form" action="includes/product.inc.php" className="mt-3">
                        <div className="row mb-3">
                            <label for="sku" className="col-sm-2 col-form-label">SKU</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="sku"/>
                                <small className="text-danger d-none" id="skuCheck">Please, Enter SKU</small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="name"/>
                                <small className="text-danger d-none" id="nameCheck">Please, enter the name of the product</small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="price" className="col-sm-2 col-form-label">Price($)</label>
                            <div className="col-sm-4">
                                <input type="number" className="form-control" id="price"/>
                                <small className="text-danger d-none" id="priceCheck">Please, enter the price of the product</small>
                            </div>
                        </div>
    
                        <div className="row mb-3">
                            <label for="productType" className="col-sm-2 col-form-label">Type Switcher</label>
                            <div className="col-sm-4">
                                <select className="form-select" aria-label="Default select example" id="productType">
                                    <option selected value="">Select</option>
                                    <option value="DVD">DVD</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Book">Book</option>
                                </select>
                                <small className="text-danger d-none" id="typeCheck">Please, select the product Type</small>
                            </div>
                        </div>
                        <div className="d-none" id="dvd">
                            <div className="row mb-3">
                                <label for="size" className="col-sm-2 col-form-label">Size(MB)</label>
                                <div className="col-sm-4">
                                    <input type="number" className="form-control" id="size"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-4">
                                    <small className="mt-2" id="sizeCheck" ><strong>Please, provide size in MB</strong></small>
                                </div>
                            </div>
                        </div>
    
                        <div id="furniture" className="d-none">
                            <div className="row mb-3">
                                <label for="height" className="col-sm-2 col-form-label">Height (CM)</label>
                                <div className="col-sm-4">
                                    <input type="number" className="form-control" id="height"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="height" className="col-sm-2 col-form-label">Width (CM)</label>
                                <div className="col-sm-4">
                                    <input type="number" className="form-control" id="width"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="height" className="col-sm-2 col-form-label">Length (CM)</label>
                                <div className="col-sm-4">
                                    <input type="number" className="form-control" id="length"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-4">
                                    <small id="dimensionCheck"><strong>Please, provide dimensions in HxWxL</strong></small>
                                </div>
                            </div>
                        </div>
    
                        <div className="d-none" id="book">
                            <div className="row mb-3"  >
                                <label for="weight" className="col-sm-2 col-form-label">Weight(Kg)</label>
                                <div className="col-sm-4">
                                    <input type="number" className="form-control" id="weight"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-4">
                                    <small className="mt-2" id="weightCheck"><strong>Please, provide weight in Kg</strong></small>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default ProductAdd;