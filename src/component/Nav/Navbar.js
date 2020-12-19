import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Filter from '../Filter/Filter';
//import Orders from '../Orders/Orders';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import HomeIcon from '@material-ui/icons/Home';
import './Nav.css';
//import Product from '../Product/Product';
//import OrderScreen from '../Screens/OrderScreen';
//import HomeScreen from '../Screens/HomeScreen';

class Navbar extends Component{
    render(){
        return(
            <div className="header">
            {/*<nav className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">*/}
              <div className="head">
              

              <Filter  /*sort={this.props.sort} size={this.props.size} 
              sortproducts={this.props.sortProducts} filterproducts={this.props.filterProducts}*/
              count={this.props.length}  /*cartItems={this.props.cartItems}*/ showcart={this.props.showcart} openmodal={this.props.openmodal}
              inputValue={this.props.inputValue} searchItems={this.props.searchItems}
              />
              
                         
            
              </div>
              
              </div>
            
        )
    }
}
export default Navbar;