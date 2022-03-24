import React, { useEffect, useState } from 'react'
import {Cart} from '../cart/Cart';
import { Product } from '../product/Product';
import './shop.css'
export const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart=(product)=>{
        const newCart =[...cart, product];
        setCart(newCart);
        
    }
    useEffect(()=>{
        // console.log(cart);
    },[cart])
    
    useEffect(()=>{
        fetch('products.json')
            .then(res => res.json())
            .then(data =>setProducts(data))
    },[]);
    
  return (
    <div className="shop-div">
        <div className="product-container">
         {products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)}   
        </div>
        <Cart cart={cart}></Cart>
    </div>
  )
}
