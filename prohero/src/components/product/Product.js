import React from 'react'
import './product.css'
export const Product = (props) => {
    const{addToCart} = props
    const {name,seller,price,ratings,img} = props.product
  return (
    <div className="card-view">
        <img src={img} alt="" />
        <div className="card-info">
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Manufacture:{seller}</small></p>
            <p><small>Ratings:{ratings}</small></p>
            <p>{addToCart}</p>
        </div>
        <button onClick={()=>addToCart(props.product)}>Add to Cart</button>
    </div>
  )
}
