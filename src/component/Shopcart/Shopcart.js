import React, { Component } from 'react';
//import {Link} from 'react-router-dom';

import formatCurrency from '../../util';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';

import './Shopcart.css';
//import Zoom from 'react-reveal/Zoom';

class Shopcart extends Component{
    constructor(props){
        super(props);
            this.state={
                name:"",
                email:"",
                address:"",
                showcheckout:false,
                
                
            }
        
    }

    
    
    handlechange=(event)=>{
          this.setState({
    [event.target.name]: event.target.value,
})
}
creatOrder=(event)=>{
    event.preventDefault();
    const order = {
        name:this.state.name,
        email:this.state.email,
        address:this.state.address
    }
    this.props.creatOrder(order);
}
    
    render(){
        const{showcart}=this.props;
        const { cartItems } = this.props;
        return(

            

            <div className="cart">
                {  showcart && (<Modal isOpen={true} onRequestClose={this.props.closemodal}>
                  
                      
                  <button className="closemodal" onClick={this.props.closemodal}>
                      x
                   </button>
                
                <div className="cart_checkout">
                 
                    { cartItems.length === 0 ? 
                    (<div className="cart__1">your cart is empty</div>) : (<div className="cart__1">{cartItems.length} items in your cart  <ShoppingCartIcon/>{cartItems.length} </div>)
                    }
                    <Fade left cascade={true}>
                    <div className="sidebar">
                    
                        {cartItems.map(item => (
                            <div className="items" key={item.id}>
                                
                                <div className="img">
                                <img src={item.image} alt={item.title}/>
                                </div>

                                <div className="modal__title">
                                {item.title} 
                                </div>
                                <div className="modal__price">
                                    
                                  ${item.price} 
                                  
                                 </div >
                                 <div className="modal__icon">
                                   
                                    <button className="addicon" onClick={()=>this.props.increment(item)}><AddIcon fontSize="small"/></button>{item.count}<button  className="removeicon" onClick={()=>this.props.decrement(item)} ><RemoveIcon fontSize="small"/></button>
                                    
                                </div>
                                 <div className="removebtn">
                                     <button className="cart__btn" onClick={()=>this.props.removefromcart(item)}> 
                                     <RemoveShoppingCartIcon/> Remove
                                      </button>
                                
                                </div>
                                

                                </div>
                                
                                
                                
                            )
                            
                        )}
                        
                            <div className="modal__total">{ cartItems.length !==0 && (
                                <div className="total"> Total price: {formatCurrency(cartItems.reduce((a,c) => a + c.count * c.price, 0))}
                                <button className="cart__btn1" onClick={()=>this.setState({showcheckout: true})}>checkout</button> 
                                
                                </div>
                                
                                )}
                            </div>
                            
                        </div>
                        </Fade>
                        </div>
                        
                       <Fade right cascade={true}> 
                    <div>
                    {this.state.showcheckout && (
                                    <div >
                                    <form className="form" onSubmit={this.creatOrder}>
                                      Name:  
                                    <input name="name" type="text" required onChange={this.handlechange}/>
                                    E-mail:
                                    <input name="email" type="email" required onChange={this.handlechange}/>
                                    Address:
                                    <input name="address" type="address" required onChange={this.handlechange}/>
                                    </form>
                                    <button className="cartbtn">proceed</button>
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
export default Shopcart;