import React, { useEffect, useState } from 'react'
import Cart from '../cart/Cart'
import { Product } from '../product/Product'
import './shop.css'
export const Shop = () => {
  const [cart, setCart] = useState([0])
  const [products, setProducts] = useState([])
  const addToCart = (product) => {
    const totalCart = parseInt(cart) + 1
    const presentCart = setCart(totalCart)
  }
  useEffect(() => {}, [cart])
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div className="shop-div">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  )
}
