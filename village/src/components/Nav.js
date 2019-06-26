import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return ( 
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/smurf-form">Add Smurf</NavLink>
            </nav>
        </div>
     );
}
 
export default Nav;