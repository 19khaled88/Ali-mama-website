import React, { useEffect, useState } from 'react'
import { Product } from '../product/Product';
import './shop.css'
export const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
            .then(res => res.json())
            .then(data =>setProducts(data))
    },[]);
    const addToCart=(product)=>{
        const newCart =[...cart, product];
        setCart(newCart);
        console.log(cart);
    }
  return (
    <div className="shop-div">
        <div className="product-container">
         {products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)}   
        </div>
        <div className="order-summary">
            <h3>Order summary</h3>
        </div>
    </div>
  )
}
