import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Product.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import formatCurrency from '../../util';
import { connect } from "react-redux";
import {fetchProducts} from '../../actions/productAction';
import {addToCart} from '../../actions/cartActions';

class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            product:null,
        }
    }

    componentDidMount(){
        this.props.fetchProducts();
    }
    
    openmodal=(product)=>{
        this.setState({
            product
        })

    }
    closemodal=()=>{
        this.setState({product: null });
    }

    render(){
const {product} = this.state;

        return(
            <div>
            <Fade bottom cascade={true}>
                { !this.props.products ? (<div>loading...</div>
                ) : ( <div className="product">

            {this.props.products.map(product=>(
              <div className="product__list" key={product.id} onClick={()=>this.openmodal(product)}>
                  
                  
                     <img className="zoom" src={product.image} width="300px" height="300px"  alt={product.title}></img>
                     
                     <div className="product__title">

                       <p className="title">{product.title}</p>
                
                        <p className="price">${product.price}</p>
                        <button className="button" onClick={()=>this.props.addToCart(product)}><ShoppingCartIcon className="car"/>cart</button>
                         </div>
                    </div>
                ))}
            </div>
                )}  
    </Fade>


    {  product && (<Modal isOpen={true} onRequestClose={this.closemodal}>
                  <Zoom>
                      
                           <button className="closemodal" onClick={this.closemodal}>
                               x
                            </button>
                      <div className="modal">
                          <img src={product.image} alt={product.title}   ></img>
                          <div className="modal__desc">
                              <p>{product.title}</p>
                              <p>{product.description}</p>
                              
                              <p> AvailableSizes: { product.availableSizes.map(size=> (
                                    <span>{"  "}<button>{size}</button></span>
                              ))}
                              </p>
                              <div className="modal__button">
                                  <div className="modal__price">
                                  price:  {" "} {formatCurrency(product.price)}
                                  </div>
                                  <button className="btn" onClick={()=> {
                                    this.props.addToCart(product); 
                                     this.closemodal(); }}>Add to cart</button>
                              </div>
                          </div>
                      </div>
                  </Zoom>
                </Modal>
              )}
    </div>
    
    )
    
}
}
export default connect((state)=>({products:state.products.filteredItems}),{
    fetchProducts,
    addToCart
    }) ( Product );