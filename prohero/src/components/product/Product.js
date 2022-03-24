import React from 'react'
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
export const Product = ({addToCart,product} ) => {
    
    const {name,seller,price,ratings,img} = product
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
        <button onClick={()=>addToCart(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  )
}
