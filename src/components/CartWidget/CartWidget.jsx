import React from 'react'
import { CiShoppingCart} from "react-icons/ci"

const CartWidget = () => {
  const {cart, itemQuantity} = useContext(CartContext)
  return (
    <div>
        <span>0</span>
        <CiShoppingCart/>
        <CiBellOn />
          <span>{itemQuantity()}</span>
          <CiShoppingCart />
    </div>
  )
}

export default CartWidget


