import {useContext} from 'react'
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

  console.log(cartList)

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
        </div>
      ) : (
        cartList.map(cartItem => (
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
        ))
      )}
    </div>
  )
}

export default Cart
