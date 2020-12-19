import {REMOVE_CART, ADD_TO_CART, INCREMENT_ITEM, DECREMENT_ITEM} from '../types';
export const cartReducer =(state={cartItems:JSON.parse(localStorage.getItem("cartItems") || "[]")}, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                cartItems: action.payload.cartItems,
            }
            case REMOVE_CART:
                return{
                    cartItems: action.payload.cartItems,
                    
                } 
                case INCREMENT_ITEM:
                return{
                    cartItems: action.payload.cartItems,
                    
                } 
                case DECREMENT_ITEM:
                return{
                    cartItems: action.payload.cartItems,
                    
                } 
                default:
                    return state;   

    }        
}