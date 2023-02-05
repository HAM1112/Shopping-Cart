import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Nav() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <Link to='/' >Chapter Haven</Link> 
        </div>
        <div className='nav-link'>
            <Link to='/shop' >Shop</Link> 
            <Link to='/contact' >contact</Link> 
        </div>
        <div className='cart-logo'>
            <Link to='/cart'>Cart</Link>
        </div>
    </nav>
  )
}

export default Nav