import {useState, useEffect, useContext} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import MenuList from '../MenuList'
import Header from '../Header'
import {CartContext} from '../../context/CartContext'
import './index.css'

const Home = ({history}) => {
  const {addCartItem, cartCount} = useContext(CartContext)

  const [categories, setCategories] = useState([])
  const [selectedDishes, setSelectedDishes] = useState([])
  const [dishQuantities, setDishQuantities] = useState({})

  const [activeMenuCategory, setActiveMenuCategory] = useState('')

  const getCategories = async () => {
    const response = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
    )
    const data = await response.json()
    const updatedData = data[0].table_menu_list

    const update = updatedData.map(each => ({
      menuCategory: each.menu_category,
      menuCategoryId: each.menu_category_id,
      categoryDishes: each.category_dishes,
    }))

    const initialQuantities = {}
    update.forEach(category => {
      category.categoryDishes.forEach(dish => {
        initialQuantities[dish.dish_id] = 0
      })
    })

    setCategories(update)
    setSelectedDishes(update.length > 0 ? update[0].categoryDishes : [])
    setDishQuantities(initialQuantities)
    setActiveMenuCategory(update.length > 0 ? update[0].menuCategory : '')
  }

  useEffect(() => {
    getCategories()
  }, [])

  const handleSelectCategory = menuCategoryId => {
    const selectedCategory = categories.find(
      category => category.menuCategoryId === menuCategoryId,
    )
    if (selectedCategory) {
      setSelectedDishes(selectedCategory.categoryDishes)
      setActiveMenuCategory(selectedCategory.menuCategory)
    }
  }

  const updateDishQuantity = (dishId, quantity) => {
    setDishQuantities(prevQuantities => ({
      ...prevQuantities,
      [dishId]: quantity,
    }))
  }

  const handleAddToCart = dish => {
    addCartItem(dish)
  }

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.push('/login')
  }

  const classNameCategory = category =>
    activeMenuCategory === category ? 'active' : 'category-button'

  return (
    <div>
      <Header cartCount={cartCount} onLogout={handleLogout} />
      <div className="categories-slider">
        {categories.map(category => (
          <button
            key={category.menuCategoryId}
            className={classNameCategory(category.menuCategory)}
            onClick={() => handleSelectCategory(category.menuCategoryId)}
            type="button"
            onKeyDown={e => {
              if (e.key === 'Enter')
                handleSelectCategory(category.menuCategoryId)
            }}
          >
            {category.menuCategory}
          </button>
        ))}
      </div>
      <MenuList
        dishes={selectedDishes}
        dishQuantities={dishQuantities}
        updateDishQuantity={updateDishQuantity}
        menuCategory={activeMenuCategory}
        handleAddToCart={handleAddToCart}
        cartCount={cartCount}
      />
    </div>
  )
}

export default withRouter(Home)
