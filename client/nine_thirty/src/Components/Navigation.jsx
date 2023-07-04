import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation () {
    return (
<<<<<<< HEAD
        <div>
            <ul className="flex justify-evenly">
=======
        <div className='shadow-slate-400 shadow-xl rounded-lg h-12 m-1'>
            <ul className="flex justify-evenly NavigationUL">
>>>>>>> 18979781f0663ace5194e2002b3b5542814a69c7
                <NavLink to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/furnitures'>
                    <li>Furnitures</li>
                </NavLink>
                <NavLink to='/outdoor'>
                    <li>Outdoor</li>
                </NavLink>
                <NavLink to='/indoor'>
                    <li>Indoor</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;