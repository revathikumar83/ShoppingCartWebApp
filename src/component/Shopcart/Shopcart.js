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
                checkout: false
                
            }
        
    }

    openmodal=()=>{
    
        this.setState({
            checkout:true
        })  
    }
    
    
    handleInput=(event)=>{
          this.setState({
    [event.target.name]: event.target.value
   //name: event.target.value,
   //address: event.target.value,
   //email: event.target.value
});

}

createOrder=(event)=>{
    event.preventDefault();
    const order = {
        name:this.state.name,
        email:this.state.email,
        address:this.state.address,
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

<div>

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
            
            
            <h2>order id:  {order.id}</h2>
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
                <p>Time:</p>
                <p>{order.createdAt}</p>
                <p>total:{order.total}</p>
                </div>
                <div>
                <p>cart Items:</p>
                <p>{order.cartItems.map((items) =>(
                    <div>{items.count} {" x "} {items.title}</div>))}
                </p>  
                </div>

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

            <ArrowBackIcon/>

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
                                    <form className="form"   onSubmit={this.createOrder}>
                                      <label>name:</label>  
                                    <input name="name"  type="text" required onChange={this.handleInput}></input>
                                    E-mail:
                                    <input name="email" type="email" required onChange={this.handleInput}/>
                                    Address:
                                    <input name="address" type="address" required onChange={this.handleInput}/>
                                    </form>
                    <button className="cartbtn"  onClick={()=>this.openmodal(checkout)}  >proceed</button>
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
