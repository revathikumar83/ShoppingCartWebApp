import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import './Nav.css';


class Navbar extends Component{
    render(){
        return(
            <div className="header">
           
              <div className="head">
              

              <Filter  /*sort={this.props.sort} size={this.props.size} 
              sortproducts={this.props.sortProducts} filterproducts={this.props.filterProducts} cartItems={this.props.cartItems} 
              inputValue={this.props.inputValue} searchItems={this.props.searchItems}
              count={this.props.length}*/  showcart={this.props.showcart} openmodal={this.props.openmodal}
              login={this.props.login} showlogin={this.props.showlogin}
              
              />
              
                         
            
              </div>
              
              </div>
            
        )
    }
}
export default Navbar;