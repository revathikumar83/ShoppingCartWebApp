import React, { Component } from 'react';
//import {Link} from 'react-router-dom';

import formatCurrency from '../../util';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Cart from './Cart/Cart';

import './Shopcart.css';
//import Zoom from 'react-reveal/Zoom';

class Shopcart extends Component{
    
render(){
        const{showcart}=this.props;
    return(
     <div className="cart">
                {  showcart && (<Modal isOpen={true} onRequestClose={this.props.closemodal}>
                  
                      
                  <button className="closemodal" onClick={this.props.closemodal}>
                      x
                   </button>
                   <Cart/>
                   </Modal>
               )}
    </div>
            
        )
    }
}
export default Shopcart;