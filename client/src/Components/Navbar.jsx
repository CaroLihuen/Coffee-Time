import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
           <h2>Navbar</h2> 
           <Link to='/home'>
                Home
           </Link>
           <Link to='/about'>
                About
           </Link>
           <Link to='/login'>
                Login
           </Link>
        </div>
    )
}