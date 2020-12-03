import React, { Component } from 'react';


class Checkout extends Component{
    render(){
        return(
           <div>
               <form>
               <input >Name:</input>
               <input type="email">Email:</input>
               <input type="password">password:</input>
               </form>
           </div>
        )
    }
}
export default Checkout;