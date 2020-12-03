
import { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import './App.css';
import Cart from './component/Cart/Cart';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import formatCurrency from './util';
import Navbar from './component/Nav/Navbar';
import Checkout from './component/Checkout/Checkout';
import Product from './component/Product/Product';
import Shopcart from './component/Shopcart/Shopcart';
import data from './data.json';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products: data.products,
      cartItems:[],
      size:"",
      sort:"",
      showcart: false,
      
    }
  }

  openmodal=()=>{
    
    this.setState({
        showcart:true
    })

}
closemodal=()=>{
    this.setState({showcart:false});
}



  creatOrder=(order)=>{
    alert("need to save details" + order.name);
  }

  addToCart=(product)=>{
    
  const cartItems= this.state.cartItems.slice();
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
  this.setState({cartItems});
  }

  removeFromCart = (product)=>{
    const cartItems= this.state.cartItems.slice();
    this.setState({
    cartItems: cartItems.filter((item) => item.id !== product.id)
  })
  }

  increment=(product)=>{
    this.setState ({
      count:1,
      cartItems: this.state.cartItems.filter(item=>{
        if(item.id === product.id) {
          item.count = item.count + 1;
        }
        
        return true;
        
      })
    });

  }

  decrement=(product)=>{
    this.setState ({
      count:1,
      cartItems: this.state.cartItems.filter(item=>{
        if(item.id === product.id) {
          item.count = item.count - 1;
        }
        
        
        return true;
        
      })
    });
  }
  


  sortProducts=(event)=>{
console.log(event.target.value);
const sort = event.target.value;
this.setState({
  sort:sort,
  products:this.state.products.slice().sort( (a,b) => (
    sort === "lowest" ? 
    ((a.price > b.price) ? 1 : -1):
    sort === "highest" ?
    ((a.price < b.price) ? 1 : -1):
    ((a.id < b.id) ? 1 : -1)
  ))

})
  }
  filterProducts=(event)=>{
    console.log(event.target.value);
if(event.target.value===""){
    this.setState({
      size:event.target.value,
      product: data.products
    })
  }
    else{
    this.setState({
      size:event.target.value,
    products: data.products.filter(product=>product.availableSizes.indexOf(event.target.value)>=0),
    })
  }
    
  }

  

  render(){
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar length={this.state.products.length} 
               sort={this.state.sort}
               size={this.state.size} 
               sortProducts={this.sortProducts} 
                filterProducts={this.filterProducts} 
                cartItems={this.state.cartItems} 
                showcart={this.state.showcart} 
                openmodal={this.openmodal}
                
                />
      
      
      <div className="content">
      
      <Product products={this.state.products} 
               addToCart={this.addToCart} />
      </div>
      

      <Shopcart  showcart={this.state.showcart} 
                 openmodal={()=>this.openmodal()} 
                 closemodal={this.closemodal}  
                 cartItems={this.state.cartItems} 
                 removefromcart={this.removeFromCart} 
                 increment={this.increment}
                 decrement={this.decrement}  
                 creatOrder={this.creatOrder}
                 />

       <footer className="footer">
        @copyright is reseverd
      </footer>
</BrowserRouter>

{/*<Cart showcart={this.state.showcart} openmodal={()=>this.openmodal()} closemodal={this.closemodal} 
       cartItems={this.state.cartItems} removefromcart={this.removeFromCart} increment={this.increment}
             decrement={this.decrement}  creatOrder={this.creatOrder}/>*/}

  
      
      
    </div>
  );
}
}

export default App;


