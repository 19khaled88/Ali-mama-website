import React from 'react'

export default function Cart(props) {
  return (
    <div className="order-summary">
      <h3>Order summary</h3>
      <p>
        Total Products:<span>{props.cart}</span>
      </p>
    </div>
  )
}
