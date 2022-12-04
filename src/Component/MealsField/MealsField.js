import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Meals from './Meals/Meals';
import './MealsField.css'

const MealsField = () => {


    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [search])


    return (
        <div>
            <div className='sarchField'>
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
                <button>Search</button>
            </div>
            <div className='mealsCart'>
                <div className='meal'>
                    {
                        meals.map(meal =>
                            <Meals
                                meal={meal}
                                key={meal.idMeal}
                                setCart={setCart}
                                cart={cart}
                            ></Meals>)
                    }
                </div>
                <div className='cart'>
                    <Cart
                        key={cart.idMeal}
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default MealsField;