import React, { Component} from 'react';
import Footer from './FooterComponent';
import ProductList from '../pages/productList';
import ProductAdd from '../pages/addProduct';
import {Routes, Route} from 'react-router-dom';


class Main extends Component {
    
  render() {
    return (
      <div>
        <Routes>
            <Route path="/" element={<ProductList/>}/>
            <Route path="/addProduct"  element={<ProductAdd/>}/>
            <Route path="*" element={<ProductList/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
 
}

export default Main;
