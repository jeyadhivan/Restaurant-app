import './index.css'

const MenuList = ({dishes, dishQuantities, updateDishQuantity}) => {
  const handleIncrement = dishId => {
    const newQuantity = dishQuantities[dishId] + 1
    updateDishQuantity(dishId, newQuantity)
  }

  const handleDecrement = dishId => {
    if (dishQuantities[dishId] > 0) {
      const newQuantity = dishQuantities[dishId] - 1
      updateDishQuantity(dishId, newQuantity)
    }
  }

  return (
    <div>
      {dishes.map(dish => (
        <div key={dish.dish_id} className="menu-list">
          <div className="menu-item">
            <h3 className="menu-head">{dish.dish_name}</h3>
            <p className="dish-price">
              {dish.dish_currency} {dish.dish_price}
            </p>
            <p className="dish-description">{dish.dish_description}</p>
            <p className="dish-calories">{dish.dish_calories} calories</p>
            {dish.dish_Availability ? (
              <>
                <div className="btn-menu">
                  <button
                    type="button"
                    className="button-menu"
                    onClick={() => handleDecrement(dish.dish_id)}
                  >
                    -
                  </button>
                  <p className="count-num">{dishQuantities[dish.dish_id]}</p>
                  <button
                    type="button"
                    className="button-menu"
                    onClick={() => handleIncrement(dish.dish_id)}
                  >
                    +
                  </button>
                </div>
                {dish.addonCat.length > 0 && (
                  <p className="custom">Customizations available</p>
                )}
              </>
            ) : (
              <p className="dish-available">Not available</p>
            )}
          </div>
          <div>
            <img
              src={dish.dish_image}
              alt={dish.dish_name}
              className="menu-img"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuList
