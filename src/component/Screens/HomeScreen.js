
import { Component } from 'react';
//import HomeIcon from '@material-ui/icons/Home';
import './HomeScreen.css';
//import Cart from './component/Cart/Cart';


//import 'bootstrap/dist/css/bootstrap.css';
//import formatCurrency from './util';
import Navbar from '../Nav/Navbar';
//import Checkout from './component/Checkout/Checkout';
import Product from '../Product/Product';
import Shopcart from '../Shopcart/Shopcart';
import data from '../../data.json';





class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      products: data.products,
      /*cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
      size:"",
      sort:"",*/
      showcart: false,
      inputValue: '',
      
      
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



 /* creatOrder=(order)=>{
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
  localStorage.setItem("cartItems",JSON.stringify(cartItems));
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
  */


 /* sortProducts=(event)=>{
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
  }*/

  searchItems=(event)=>{
    event.preventDefault();
    console.log(event.target.value);

    this.setState({
      inputValue: event.target.value,
      products: this.state.products.filter(product =>
        product.title.toLowerCase().includes(this.state.inputValue.toLowerCase())
      )
    })
  }


  /*filterProducts=(event)=>{
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
    
  }*/

  
       

  render(){
    
      return (
        
    <div className="App">
      
      
      <Navbar /*length={this.state.products.length} 
               sort={this.state.sort}
               size={this.state.size} 
               sortProducts={this.sortProducts} 
                filterProducts={this.filterProducts} 
                cartItems={this.state.cartItems} */
                showcart={this.state.showcart} 
                openmodal={this.openmodal}
                searchItems={this.searchItems}
                inputValue={this.state.inputValue}
                

                />
      
      
      <div className="content">
      
      <Product /*products={this.state.products} 
               addToCart={this.addToCart} */ />
      </div>
      

      <Shopcart  showcart={this.state.showcart} 
                 openmodal={this.openmodal} 
                 closemodal={this.closemodal}  
                 /*cartItems={this.state.cartItems} 
                 removefromcart={this.removeFromCart} 
                 increment={this.increment}
                 decrement={this.decrement}  
                 /*creatOrder={this.creatOrder}*/
                 />
               

       <footer className="footer">
        @copyright is reseverd
      </footer>


{/*<Cart showcart={this.state.showcart} openmodal={()=>this.openmodal()} closemodal={this.closemodal} 
       cartItems={this.state.cartItems} removefromcart={this.removeFromCart} increment={this.increment}
             decrement={this.decrement}  creatOrder={this.creatOrder}/>*/}

  
      
      
    </div>
    
  );
}
}

export default HomeScreen;


