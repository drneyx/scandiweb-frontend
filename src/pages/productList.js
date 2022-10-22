import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from '../components/ProductItems';
import axios from 'axios';

function ProductList(){

    const [products, setProducts] = useState([]);

    useEffect(function() {
        axios.get(`http://localhost:8888/php-api/products`)
        .then(res => {
          const productsRes = res.data;
          setProducts(productsRes)
        })
      }, []);

    
    /* --- Render all products --- */
    const renderProductItems = products.map((product) => {
        return (
          <ProductItem key={product.id} product={product}/>
        );
    });

    return(
        <div>
            <section className="content-section">
                <div className="container">
                    <div className="w-100 content-section-products mt-2">
                        <div className="row mt-3">
                            {products.length >= 1 && renderProductItems}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default ProductList;