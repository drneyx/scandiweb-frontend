import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import  Menu  from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import ProductList from '../pages/productList';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import {Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };    
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/php-api/products`)
      .then(res => {
        const products = res.data;
        console.log(products);
        this.setState({ products });
      })
  }

  render() {
    const HomePage = () => {
        return (
            <Home/>
        )
    }

    return (
      <div>
       
        <Header/>
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route exact path="/menu"  element={<Menu dishes={this.state.dishes}/>}/>
                {/* <Route path="/" element={<Navigate to ="/home" />}/> */}
            </Routes>
         <Footer/>
       
        
      </div>
    );
  }
 
}

export default Main;
