import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './Filter.css';
import HomeIcon from '@material-ui/icons/Home';
import { connect } from 'react-redux';
import {filterProducts, sortProducts} from '../../actions/productAction';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

//import OrderScreen from '../Screens/OrderScreen';
//import HomeScreen from '../Screens/HomeScreen';

class Filter extends Component{
    
    render(){
        const { showcart}=this.props;
        const { cartItems } = this.props;
        return(
            !this.props.filteredProduct ? (<div>Loading...</div>) :
            ( <div className="filter">
                
              
                
                <input className="input" placeholder='search' value={this.props.inputValue} onChange={this.props.searchItems}/><SearchIcon/>
                
          <div className="filter__count">{this.props.filteredProduct.length} products</div>  
          <div className="filter__size">size
              <select value={this.props.size} onChange={(e)=>this.props.filterProducts(this.props.products, e.target.value)} >
                  <option value="">ALL</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XS">XS</option>
                  </select>
          </div>
          <div className="filter__order">sort
              <select value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredProduct, e.target.value)}>
              <option value="Latest" >Latest</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
              </select>
              </div>
            <div>
                <p>sign in</p>  
          </div>
        <div className="shopcart" onClick={()=>this.props.openmodal(showcart)} >
            <ShoppingCartIcon className="cart1" fontSize='large'  /> 
             {cartItems.length}
             
        </div>
        
        
          </div> )

          
        )
    }
}
export default connect(
    (state)=>({
        size: state.products.size,
        sort: state.products.sort,
        products: state.products.items,
        cartItems: state.cart.cartItems,
        filteredProduct: state.products.filteredItems


    }),
    {
    filterProducts,
    sortProducts
   }
) (Filter);