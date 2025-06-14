import React from 'react'
import './PizzaCard.css'
const PizzaImage = ({ pizzaImg }) => {
  return (
    <img src={pizzaImg || "https://avatars.githubusercontent.com/u/2?v=4"} alt="User" className='img' />
  )
}

export default PizzaImage