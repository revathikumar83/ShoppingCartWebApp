import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../Filter/Filter';

import HomeIcon from '@material-ui/icons/Home';
import './Nav.css';

class Navbar extends Component{
    render(){
        return(
            <div className="header">
            {/*<nav className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">*/}
              <div className="head">
              <Link to='/' className='nav-link'>
                  <HomeIcon className="icon"  fontSize="large" />
              </Link>
              <Filter  sort={this.props.sort} size={this.props.size} 
              sortproducts={this.props.sortProducts} filterproducts={this.props.filterProducts}
              count={this.props.length} cartItems={this.props.cartItems} showcart={this.props.showcart} openmodal={this.props.openmodal}/>

              

              </div>
              
              </div>
            
        )
    }
}
export default Navbar;