import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductList(){

    return(
        <div>
            <section className="content-section">
                <div className="container">
                    <div className="w-100 content-section-products mt-2">
                        <div className="row mt-3">
                            <div className="col-6 col-md-3 mb-3">
                                <div className="card product-box">
                                    <div className="d-flex align-items-center justify-content-center inner-box">
                                        <div className="form-check mt-2 check-form">
                                            <input className="form-check-input" type="checkbox" id="delete-checkbox" value="" id="flexCheckDefault"/>
                                        </div>
                                        <div className="d-flex align-items-sm-start justify-content-md-start my-4 flex-column ">
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-3">
                                <div className="card product-box">
                                    <div className="d-flex align-items-center justify-content-center inner-box">
                                        <div className="form-check mt-2 check-form">
                                            <input className="form-check-input" type="checkbox" id="delete-checkbox" value=""/>
                                        </div>
                                        <div className="d-flex align-items-sm-start justify-content-md-start my-4 flex-column ">
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-3">
                                <div className="card product-box">
                                    <div className="d-flex align-items-center justify-content-center inner-box">
                                        <div className="form-check mt-2 check-form">
                                            <input className="form-check-input" type="checkbox" id="delete-checkbox" value=""/>
                                        </div>
                                        <div className="d-flex align-items-sm-start justify-content-md-start my-4 flex-column ">
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-3">
                                <div className="card product-box">
                                    <div className="d-flex align-items-center justify-content-center inner-box">
                                        <div className="form-check mt-2 check-form">
                                            <input className="form-check-input" type="checkbox" id="delete-checkbox" value="" />
                                        </div>
                                        <div className="d-flex align-items-sm-start justify-content-md-start my-4 flex-column ">
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-3">
                                <div className="card product-box">
                                    <div className="d-flex align-items-center justify-content-center inner-box">
                                        <div className="form-check mt-2 check-form">
                                            <input className="form-check-input" type="checkbox" id="delete-checkbox" value=""/>
                                        </div>
                                        <div className="d-flex align-items-sm-start justify-content-md-start my-4 flex-column ">
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-3">
                                <div className="card product-box">
                                    <div className="d-flex align-items-center justify-content-center inner-box">
                                        <div className="form-check mt-2 check-form">
                                            <input className="form-check-input" type="checkbox" id="delete-checkbox" value=""/>
                                        </div>
                                        <div className="d-flex align-items-sm-start justify-content-md-start my-4 flex-column ">
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-3">
                                <div className="card product-box">
                                    <div className="d-flex align-items-center justify-content-center inner-box">
                                        <div className="form-check mt-2 check-form">
                                            <input className="form-check-input" type="checkbox" id="delete-checkbox" value=""/>
                                        </div>
                                        <div className="d-flex align-items-sm-start justify-content-md-start my-4 flex-column ">
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-3">
                                <div className="card product-box">
                                    <div className="d-flex align-items-center justify-content-center inner-box">
                                        <div className="form-check mt-2 check-form">
                                            <input className="form-check-input" type="checkbox" id="delete-checkbox" value=""/>
                                        </div>
                                        <div className="d-flex align-items-sm-start justify-content-md-start my-4 flex-column ">
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 mb-3">
                                <div className="card product-box">
                                    <div className="d-flex align-items-center justify-content-center inner-box">
                                        <div className="form-check mt-2 check-form">
                                            <input className="form-check-input" type="checkbox" id="delete-checkbox" value=""/>
                                        </div>
                                        <div className="d-flex align-items-sm-start justify-content-md-start my-4 flex-column ">
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                            <small className="card-text my-0">165 views - 58 hours ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default ProductList;