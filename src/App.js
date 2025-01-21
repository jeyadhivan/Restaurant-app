import {useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import {
  RestaurantNameProvider,
  useRestaurantName,
} from './context/RestaurantNameContext'
import {CartProvider} from './context/CartContext'
import './App.css'

const App = () => {
  const {setRestaurantName} = useRestaurantName()

  useEffect(() => {
    const fetchRestaurantName = async () => {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      const data = await response.json()
      setRestaurantName(data[0].restaurant_name)
    }

    fetchRestaurantName()
  }, [setRestaurantName])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}

const AppWrapper = () => (
  <RestaurantNameProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </RestaurantNameProvider>
)

export default AppWrapper
