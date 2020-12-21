import React, { Component } from 'react';
//import {Link} from 'react-router-dom';

import formatCurrency from '../../util';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {removeFromCart, incrementItem, decrementItem} from '../../actions/cartActions';
import {createOrder, clearOrder} from '../../actions/orderAction';
import { connect } from 'react-redux';

import './Shopcart.css';
//import { Zoom } from '@material-ui/core';
import Zoom from 'react-reveal/Zoom';

class Shopcart extends Component{
    constructor(props){
        super(props);
            this.state={
                name: "",
                email: "",
                address: "",
                showcheckout:false,
                checkout: false,
                
                
            }
        
    }

    handleInput=(event)=>{
        this.setState({
  [event.target.name]: event.target.value });
  }

    openmodal=()=>{
    
        this.setState({
            checkout:true
        })  
    }
    
    
    




createOrder=(event)=>{
    event.preventDefault();
    const order = {
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        cartItems: this.props.cartItems,
        total: this.props.cartItems.reduce((a,c)=> (a + c.price*c.count) , 0)
    }
    this.props.createOrder(order);
}
    
closemodal=()=>{
    this.setState({
        checkout:false
    }) 
}

closeorder=()=>{
    this.props.clearOrder();
}

    componentDidMount() {
    this.props.createOrder();
  }


    render(){

        const{checkout}=this.state;
        const{showcart}=this.props;
        const { cartItems, order } =this.props;
        

    return (

    <div className="cart">

<div className="modal">

{ checkout && ( 
<Modal isOpen={true} onRequestClose={this.closemodal} >
    <Zoom>
        <button className="closemodal" onClick={this.closemodal} >
            x
        </button>
        
{order && ( 
            
        <div className="order-details">
        <h3 className="success-orders">
                your order has been placed
            </h3>
            <div className="order-list">
               <h3>order id: <span> {order.id} </span></h3>
                <p>Name: <span>{order.name}</span></p>
                
                <p>Email: <span>{order.email}</span></p>
                <p>Address:<span> {order.address} </span></p>
                <p>Time:<span>{order.createdAt}</span> </p>
                 <p>Total:  <span>${order.total}</span></p>
                 <p>cart Items: {order.cartItems.map((items) =>(
                    <span>{items.count} {" x "} {items.title}</span>))}
                </p>  
             </div>
            
        </div>
            
            
        )}
        </Zoom>
       </Modal>
        )}
    </div>
                
        {  showcart && (
        <Modal isOpen={true} onRequestClose={this.props.closemodal}>
                  
            <button className="closemodal" onClick={this.props.closemodal}>
                      x
            </button>

            

            <div className="cart_checkout">
                 
                    { cartItems.length === 0 ? 
                    (<div className="cart__1">your cart is empty</div>) : (<div className="cart__1">{cartItems.length} items in your cart   </div>)
                    }
              <div className="modal__total">{ cartItems.length !==0 && (
                                <div className="total"> Total price: {formatCurrency(cartItems.reduce((a,c) => a + c.count * c.price, 0))}
                                <button className="cart__btn1" onClick={()=>this.setState({showcheckout: true})}>checkout</button> 
                                
                                </div>
                                
                                )}
                            </div>
                    
                    <Fade left cascade={true}>
                    <div className="sidebar">
                    
                        {cartItems.map(item => (
                            <div className="items" key={item.id}>
                                
                                <div className="imgzoom">
                                <img src={item.image} alt={item.title}/>
                                </div>

                                <div className="modal__title">
                                {item.title} 
                                </div>
                                <div className="modal__price">
                                    
                                  ${item.price} 
                                  
                                 </div >
                                 <div className="modal__icon">
                                   
                                    <button className="addicon" onClick={()=>this.props.incrementItem(item)}><AddIcon fontSize="small"/></button>{item.count}<button  className="removeicon" onClick={()=>this.props.decrementItem(item)} ><RemoveIcon fontSize="small"/></button>
                                    
                                </div>
                                 <div className="removebtn">
                                     <button className="cart__btn" onClick={()=>this.props.removeFromCart(item)}> 
                                     <RemoveShoppingCartIcon/> Remove
                                      </button>
                                
                                </div>
                            </div>
                            )
                        )}
                        
                            
                            
                        </div>
                        </Fade>
                        </div>
                        
                       <Fade top cascade={true}> 
                    <div>
                    {this.state.showcheckout && (
                                    <div >
                                    <form className="form"  method='POST' onSubmit={this.createOrder}>
                                    <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>

                                    <label>Email</label>
                                    <input
                            name="email"
                            type="email"
                            required
                            onChange={this.handleInput}
                          ></input>
                           <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                               <button className="cartbtn"  onClick={()=>this.openmodal(checkout)} >proceed</button>           
                                    </form>
                    
                                    </div>
                                    
                                    
                                )}
                                </div>
                            </Fade>
                        </Modal>
                   )}
             
         </div>
      )
    }
}

export default connect(
    (state) => ({
      order: state.order.order,
      cartItems: state.cart.cartItems,
    }),
    { removeFromCart, createOrder, clearOrder, incrementItem, decrementItem }
  )(Shopcart);
