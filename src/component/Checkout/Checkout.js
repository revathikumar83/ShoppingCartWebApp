import React, { Component } from 'react';
//import {Link} from 'react-router-dom';

import formatCurrency from '../../util';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {createOrder, clearOrder} from '../../actions/orderAction';
import {connect} from 'react-redux';

//import './Shopcart.css';

import Zoom from 'react-reveal/Zoom';

class Checkout extends Component{
    constructor(props){
        super(props);
            this.state={
                name:"",
                email:"",
                address:"",
                Checkout:false,
        }
 }
creatOrder=(event)=>{
    event.preventDefault();
    const order = {
        name:this.state.name,
        email:this.state.email,
        address:this.state.address,
        cartItems: this.props.cartItems,
        total: this.props.cartItems.reduce((a,c)=> (a + c.price*c.count) , 0)
    }
    this.props.creatOrder(order);
}
    
closemodal=()=>{
    this.props.clearOrder();

}
    render(){
        
        const {  order } = this.props;

        return(

      
           <div>
        {  this.state.checkout && (
    <Modal isOpen={true} onRequestClose={this.closemodal} >
        <Zoom>
            <button className="closemodal" onClick={this.closemodal} >
                x
            </button>
            {order.map(order => (
            <div className="order-details">
                <h3 className="success-orders">
                    your order has been placed
                </h3>
                
                <h2>order {order.id}</h2>
                <div className="order-list">
                    <div >
                    <p>Name:</p>
                    <p>{order.name}</p>
                    </div>
                    <div>
                    <p>Email:</p>
                    <p>{order.email}</p>
                    </div>
                    <div>
                    <p>Address:</p>
                    <p>{order.address}</p>
                    </div>
                    <div>
                    <p>Total:</p>
                    <p>{formatCurrency(order.total)}</p>
                    </div>
                    <div>
                    <p>cart Items:</p>
                    <p>{order.cartItems.map(x=>(
                        <div>{x.count} {" x "} {x.title}</div>))}
                        </p>
                    </div>

                </div>
                
            </div>
            ))}
        </Zoom>
    </Modal>
)}
   </div> 
                       
        )           
 }
}


export default connect(
    (state)=>({
        order: state.order.order
        
    }),
    {
      clearOrder
   }
) (Checkout);
