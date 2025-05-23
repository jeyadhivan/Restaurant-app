import {withRouter, Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import {useRestaurantName} from '../../context/RestaurantNameContext'
import './index.css'

const Header = ({cartCount, onLogout}) => {
  const {restaurantName} = useRestaurantName()

  const onClickLogout = () => {
    onLogout()
  }

  return (
    <div className="header">
      <Link to="/" className="logo">
        <h1>{restaurantName}</h1>
      </Link>
      <div className="cart">
        <p>My Orders</p>
        <Link to="/cart">
          <AiOutlineShoppingCart className="icon" data-testid="cart" />
        </Link>
        <div className="count">
          <p className="counter">{cartCount}</p>
        </div>
      </div>
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
