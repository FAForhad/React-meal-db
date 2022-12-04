import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className='nav'>
                <div className='name'>
                    <h1>The Meal DB</h1>
                </div>
                <div className='points'>
                    <ul>
                        <li><a href="./home">Home</a></li>
                        <li><a href="./all Meals">All Meals</a></li>
                        <li><a href="./meals">Meals</a></li>
                        <li><a href="./home">About</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;