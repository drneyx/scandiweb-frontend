import React, { Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';

class ListHeader extends Component {
    render() {
        return (
            <>
            <header className="header-section">
                <div className="container flex-grow-1 d-flex mt-4">
                    <div className="w-100 d-flex justify-content-between mt-3 top">
                        <div className="d-flex justify-content-start align-items-start py-2">
                            <span className="product-title">Product List</span>
                        </div>
                        <div className="ms-auto group-button  d-flex justify-content-between align-items-start py-2">
                            <button className="btn btn-sm btn-default product-button-inline mx-2">
                                <span>Add</span>
                            </button>
                            <button className="btn btn-sm btn-default product-button text-nowrap"> Mass delete</button>
                        </div>
                    </div>
                </div>
            </header>
            </>
        )
    }
}


export default ListHeader;