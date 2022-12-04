import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meals.css'
const Meals = (props) => {
    const { meal, setCart, cart } = props
    const { strMealThumb, idMeal, strTags, strMeal, } = meal;

    const handleClick = (meal) => {
        const newCart = [...cart, meal.strMeal];
        localStorage.setItem = JSON.stringify('meal', meal)
        setCart(newCart)
    }

    return (
        <div className='meals'>
            <img src={strMealThumb} alt="" />
            <h3>Meal name : {strMeal}</h3>
            <p>this is {idMeal}</p>
            <p>Tag : {strTags ? strTags : 'No meal tag'}</p>
            <button className='btn-cart' onClick={() => handleClick(meal)}>
                Add to Cart
                <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Meals;