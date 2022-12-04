import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    return (
        <div className='cart'>
            <h1>Your Selected Products</h1>
            <ul className='cartUl'>
                {
                    cart?.map((e) => <li>{e}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;