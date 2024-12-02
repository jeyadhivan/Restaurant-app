import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = ({cartCount, restaurantName}) => (
  <div className="header">
    <div className="logo">{restaurantName}</div>
    <div className="cart">
      <p>My Orders</p>
      <AiOutlineShoppingCart className="icon" />
      <div className="count">
        <p className="counter">{cartCount}</p>
      </div>
    </div>
  </div>
)

export default Header
