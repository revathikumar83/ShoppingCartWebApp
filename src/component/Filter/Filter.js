import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import './Filter.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Filter extends Component{
    
    render(){
        const { showcart}=this.props;
        const { cartItems } = this.props;
        return(
            <div className="filter">
                
                <input className="input" placeholder='search'/><SearchIcon/>
                
          <div className="filter__count">{this.props.count} products</div>  
          <div className="filter__size">size
              <select value={this.props.size} onChange={this.props.filterproducts} >
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
              <select value={this.props.sort} onChange={this.props.sortproducts}>
              <option >Latest</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
              </select>
              </div>
        <div className="shopcart" onClick={()=>this.props.openmodal(showcart)} >
            <ShoppingCartIcon className="cart1" fontSize='large'  /> 
             {cartItems.length}
             
        </div>
        <div>
              
          </div>
          </div>

          
        )
    }
}
export default Filter;