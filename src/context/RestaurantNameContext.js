import {createContext, useContext, useState} from 'react'

const RestaurantNameContext = createContext()

export const useRestaurantName = () => useContext(RestaurantNameContext)

export const RestaurantNameProvider = ({children}) => {
  const [restaurantName, setRestaurantName] = useState('')

  return (
    <RestaurantNameContext.Provider value={{restaurantName, setRestaurantName}}>
      {children}
    </RestaurantNameContext.Provider>
  )
}
