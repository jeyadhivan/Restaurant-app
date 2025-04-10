import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'

import Header from '../Header'
import './index.css'

const Cart = () => {
  const {
    cartList,
    removeAllCartItems,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeCartItem,
    cartCount,
  } = useContext(CartContext)

  const getTotalPrice = () =>
    cartList
      .reduce((total, item) => total + item.dish_price * item.quantity, 0)
      .toFixed(2)

  const getCartQuantity = () =>
    cartList.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="bg-card">
      <Header cartCount={cartCount} />

      {cartList.length > 0 && (
        <button
          type="button"
          onClick={removeAllCartItems}
          className="remove-all-button"
        >
          Remove All
        </button>
      )}

      {cartList.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
            alt="empty-cart"
          />
          <p>Your Cart is Empty</p>
          <Link to="/">
            <button type="button" className="back-button">
              ← Back to Menu
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cartList.map(cartItem => (
            <div key={cartItem.dish_id} className="cart-item">
              <img src={cartItem.dish_image} alt={cartItem.dish_name} />
              <p>{cartItem.dish_name}</p>
              <p>
                {cartItem.dish_currency} {cartItem.dish_price}
              </p>
              <button
                type="button"
                className="btn"
                onClick={() => decrementCartItemQuantity(cartItem.dish_id)}
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                type="button"
                className="btn"
                onClick={() => incrementCartItemQuantity(cartItem.dish_id)}
              >
                +
              </button>
              <button
                type="button"
                onClick={() => removeCartItem(cartItem.dish_id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: {cartCount}</p>
            <p>Total Quantity: {getCartQuantity()}</p>
            <p>Total Price: SAR {getTotalPrice()}</p>
            <button type="button" className="checkout-button">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
