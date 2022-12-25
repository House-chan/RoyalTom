import './Cart.css';
import '../component/ProductCard/ProductCard.css';
import { React } from 'react';
import {Link} from 'react-router-dom';
import { useState, useContext } from "react";
import { CartContext } from "../component/function/CartContext"
import CartProduct from "../component/function/CartProduct";

import Navbar from '../component/Navbar/Navbar';

function Cart() {
      const cart = useContext(CartContext);
      const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  
   return(
  <>
  <Navbar/>
   <div className='contenerCart'>
         <Link to = "/produclist" className='continueCart'>
            { '< ' + 'Continue Shopping'}
         </Link>
         <div className='centerCart'>
            <div className='boxCart'>
               <>    
                  <div className='productCart'>
                     <div className='HeadCart'>
                           <div className='topCart textblack'>
                              <p>Shopping Cart</p>
                           </div>
                           <div className='topCart textblack'>
                           {productsCount} ITEMs
                           </div>
                        </div>

                     <hr className='lineCart'/>
                     <div className='HeadCart'>
                        <div className='titleCart'>
                           <p>Product Details</p>
                        </div>
                        <div className='itemCart'>
                           <p>Quanlity</p>
                           <p>Price</p>
                           <p>Total</p>
                        </div>
                     </div>

                     {/* <p>Shopping Cart {productsCount} </p> */}
                     {cart.items.map( (currentProduct, idx) => (
                        // currentProduct.id
                        <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                     ))}
                  </div>

                  <div className='summaryCart'>
                     <h2>Order Summary</h2>
                     <div className='directionCart'>
                        <h5>Item ({productsCount})</h5>
                        <h5>{cart.getTotalCost().toFixed(2)}</h5>
                     </div>
                     <div className='directionCart'>
                        <h5>Shipping</h5>
                        <h5>Free</h5>
                     </div>
                     <div className='directionCart'>
                        <h5>Promo (12.12)</h5>
                        <h5>-12</h5>
                     </div>

                     <div className='directionCart'>
                        <select name="cars" id="cars">
                           <option value="5-7 day" className='xcz'>
                              <h5>5-7 day </h5>
                              
                              <h5> FREE SHIPPING</h5>
                           </option>
                           <option value="1-3 day" className='directionCart'>1-3 day</option>
                        </select>
                     </div>
                     
                     <div className='directionCart'>
                        <h5>12.12</h5>
                        <h5>Add</h5>
                     </div>

                     <div className='directionCart'>
                        <h5>**** **** **** 5555</h5>
                        <h5>v</h5>
                     </div>
                     
                     <hr className='lineCart'/>
                     <br></br>

                     <h3>Total: {cart.getTotalCost().toFixed(2)}</h3>
                     <button className="btnCart" >
                        CHECK OUT
                     </button>
                  </div>
               </>
            </div>
         </div>
      </div>
  </>
  )
  }
  
export default Cart;