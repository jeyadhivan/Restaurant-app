import {Component} from 'react'
import MenuList from '../MenuList'
import Header from '../Header'
import './index.css'

class CategoriesSlider extends Component {
  state = {
    categories: [],
    selectedDishes: [],
    dishQuantities: {},
    cartCount: 0,
    restaurantName: '',
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories = async () => {
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

    // Initialize dish quantities to 0 for all dishes
    const initialQuantities = {}
    update.forEach(category => {
      category.categoryDishes.forEach(dish => {
        initialQuantities[dish.dish_id] = 0
      })
    })

    this.setState({
      categories: update,
      selectedDishes: update.length > 0 ? update[0].categoryDishes : [], // Set the initial dishes to the first category's dishes
      dishQuantities: initialQuantities,
      restaurantName: data[0].restaurant_name,
    })
  }

  handleSelectCategory = menuCategoryId => {
    const {categories} = this.state
    const selectedCategory = categories.find(
      category => category.menuCategoryId === menuCategoryId,
    )
    if (selectedCategory) {
      this.setState({selectedDishes: selectedCategory.categoryDishes})
    }
  }

  updateDishQuantity = (dishId, quantity) => {
    this.setState(prevState => {
      const newQuantities = {...prevState.dishQuantities, [dishId]: quantity}
      const newCartCount = Object.values(newQuantities).reduce(
        (a, b) => a + b,
        0,
      )
      return {dishQuantities: newQuantities, cartCount: newCartCount}
    })
  }

  render() {
    const {
      categories,
      selectedDishes,
      cartCount,
      restaurantName,
      dishQuantities,
    } = this.state

    return (
      <div>
        <Header cartCount={cartCount} restaurantName={restaurantName} />
        <div className="categories-slider">
          {categories.map(category => (
            <div
              key={category.menuCategoryId}
              onClick={() => this.handleSelectCategory(category.menuCategoryId)}
              role="button"
              tabIndex="0"
              onKeyDown={e => {
                if (e.key === 'Enter')
                  this.handleSelectCategory(category.menuCategoryId)
              }}
            >
              {category.menuCategory}
            </div>
          ))}
        </div>
        <MenuList
          dishes={selectedDishes}
          dishQuantities={dishQuantities}
          updateDishQuantity={this.updateDishQuantity}
        />
      </div>
    )
  }
}

export default CategoriesSlider
