import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  const addCartItem = item => {
    setCartList(prevCartList => {
      const existingItem = prevCartList.find(
        cartItem => cartItem.dish_id === item.dish_id,
      )
      if (existingItem) {
        return prevCartList.map(cartItem =>
          cartItem.dish_id === item.dish_id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem,
        )
      }
      return [...prevCartList, {...item, quantity: 1}]
    })
  }

  const removeCartItem = itemId => {
    setCartList(prevCartList =>
      prevCartList.filter(cartItem => cartItem.dish_id !== itemId),
    )
  }

  const incrementCartItemQuantity = itemId => {
    setCartList(prevCartList =>
      prevCartList.map(cartItem =>
        cartItem.dish_id === itemId
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem,
      ),
    )
  }

  const decrementCartItemQuantity = itemId => {
    setCartList(prevCartList =>
      prevCartList
        .map(cartItem =>
          cartItem.dish_id === itemId && cartItem.quantity > 0
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem,
        )
        .filter(cartItem => cartItem.quantity > 0),
    )
  }

  const removeAllCartItems = () => {
    setCartList([])
  }

  const cartCount = cartList.reduce(
    (count, cartItem) => count + cartItem.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeAllCartItems,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
