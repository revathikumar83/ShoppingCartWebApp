import {REMOVE_CART, ADD_TO_CART, INCREMENT_ITEM, DECREMENT_ITEM} from '../types';

export const addToCart  = (product) =>  (dispatch,getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let inCart = false;
    cartItems.forEach((item)=>{
      if(item.id === product.id) {
        item.count++;
       inCart = true;
      }
      
  });
  if(!inCart){
    cartItems.push({...product, count: 1})
  }
    dispatch({
        type:ADD_TO_CART,
        payload: {cartItems}
    })
    localStorage.setItem( "cartItems", JSON.stringify(cartItems));
 }


 export const removeFromCart  = (product) =>  (dispatch,getState) => {
    const cartItems = getState().cart.cartItems.slice().filter((item) => item.id !== product.id);


    dispatch({
        type: REMOVE_CART,
        payload: {cartItems}
    })
    localStorage.setItem( "cartItems", JSON.stringify(cartItems));
 }

 export const incrementItem  = (product) =>  (dispatch,getState) => {
    
    const cartItems = getState().cart.cartItems.filter(item=>{
        
        if(item.id === product.id) {
            
          item.count = item.count + 1;
        }
        
        return true;
        
      })


    dispatch({
        type: INCREMENT_ITEM,
        payload: {cartItems}
    })
    localStorage.setItem( "cartItems", JSON.stringify(cartItems));
 }

 export const decrementItem  = (product) =>  (dispatch,getState) => {
    
    const cartItems = getState().cart.cartItems.filter(item=>{
        
        if(item.id === product.id) {
            
          item.count = item.count - 1;
        }
        
        return true;
        
      })


    dispatch({
        type: DECREMENT_ITEM,
        payload: {cartItems}
    })
    localStorage.setItem( "cartItems", JSON.stringify(cartItems));
 }


 