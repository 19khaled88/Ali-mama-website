import React from 'react'
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
export const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product
  const { addToCart } = props
  return (
    <div className="card-view">
      <img src={img} alt="" />
      <div className="card-info">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Manufacture:{seller}</small>
        </p>
        <p>
          <small>Ratings:{ratings}</small>
        </p>
       
      </div>
      <button onClick={()=>addToCart(props.product)}>
        <span>Add to Cart</span>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  )
}
