import './index.css'

const MenuList = ({
  dishes,
  dishQuantities,
  updateDishQuantity,
  handleAddToCart,
  activeMenuCategory,
}) => {
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
    <div className="bg-card-menu">
      {dishes.map(dish => {
        const isUnavailable =
          activeMenuCategory === dish.dish_category &&
          dish.dish_Availability === false

        return (
          <div key={dish.dish_id} className="menu-list">
            <div className="menu-item">
              <div className={dish.dish_Type === 2 ? 'red-box' : 'green-box'}>
                <div
                  className={
                    dish.dish_Type === 2 ? 'red-circle' : 'green-circle'
                  }
                >
                  0
                </div>
              </div>

              <h3 className="menu-head">{dish.dish_name}</h3>
              <p className="dish-price">
                {dish.dish_currency} {dish.dish_price}
              </p>
              <p className="dish-description">{dish.dish_description}</p>

              {isUnavailable ? (
                <p className="not-available">Not available</p>
              ) : (
                <>
                  <div className="btn-menu">
                    <button
                      type="button"
                      className="button-menu"
                      onClick={() => handleDecrement(dish.dish_id)}
                      disabled={dishQuantities[dish.dish_id] === 0}
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
              )}

              {dishQuantities[dish.dish_id] > 0 && !isUnavailable ? (
                <button type="button" onClick={() => handleAddToCart(dish)}>
                  ADD TO CART
                </button>
              ) : null}
            </div>

            <div className="cl-image-card">
              <p className="dish-calories">{dish.dish_calories} calories</p>
              <img
                src={dish.dish_image}
                alt={dish.dish_name}
                className="menu-img"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MenuList
