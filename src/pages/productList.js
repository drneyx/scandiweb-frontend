import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from '../components/ProductItems';
import axios from 'axios';
import ListHeader from '../components/ListHeaderComponent';

function ProductList(){

    const [products, setProducts] = useState([]);
    const [checkedProduct, setCheckedProduct] = useState([]);

    useEffect(function() {
        axios.get(`http://localhost:8888/php-api/products`)
        .then(res => {
          const productsRes = res.data;
          setProducts(productsRes)
        })
      }, []);


    function  oncheckBoxProductChange (e) {
        var updatedList = [...checkedProduct];
        if (e.target.checked) {
          updatedList = [...checkedProduct, e.target.value];
        } else {
          updatedList.splice(checkedProduct.indexOf(e.target.value), 1);
        }
        setCheckedProduct(updatedList);
    }

    function massDelete () {
        axios.delete(`http://localhost:8888/php-api/products`, {data: {productList: checkedProduct}})
            .then((res) => {
                console.log(res);
            })
            .catch(error => this.err = error.message)
      }

 
    
    /* --- Render all products --- */
    const renderProductItems = products.map((product) => {
        return (
          <ProductItem 
          key={product.id} 
          id={product.id}
          name={product.name}
          product={product}  
          checkboxChange={oncheckBoxProductChange}/>
        );
    });

    return(
        <div>
            <ListHeader submit={massDelete}/>
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