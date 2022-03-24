import React from 'react'

export const Cart=({cart})=> {
    console.log(cart)
    let total = 0
    for(const product of cart){
        console.log(product);
        total = total + product.price
    }
  return (
    <div className="order-summary">
        <h3>Order summary</h3>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${total}</p>
    </div>
  )
}
