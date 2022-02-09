import React from "react"; 
import {NavLink} from "react-router-dom";
const Header=() => (
    <header>
      <h1>Expensify</h1>
    <p> <NavLink to = '/' className = {({ isActive })=> isActive ? 'is-active' : undefined} >Home</NavLink> </p>
    <p> <NavLink to='/create' className={({ isActive })=> isActive ? 'is-active' : undefined} >Add</NavLink> </p> 
    <p> <NavLink to='/edit/:id' className={({ isActive })=> isActive ? 'is-active' : undefined} >Edit</NavLink> </p> 
    <p> <NavLink to='/help' className={({ isActive })=> isActive ? 'is-active' : undefined} >Help</NavLink> </p> 
    </header>);
    export default Header;
  
    // isActive is a property 