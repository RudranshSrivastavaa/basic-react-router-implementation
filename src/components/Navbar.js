import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'
const Navbar = () => {
    const navLinkStyle=({isActive})=>{
        return{
            fontWeight : isActive?'bold':'normal',
            textDecoration:isActive?'none':'underline',
        }
    }
    const auth = useAuth()
  return (
    <nav>
        <NavLink to='/' style={navLinkStyle}>Home</NavLink>
        <NavLink to='/about' style={navLinkStyle}>About</NavLink>
        <NavLink to='/products' style={navLinkStyle}>Product</NavLink>
        <NavLink to='/profile' style={navLinkStyle}>Profile</NavLink>
        {!auth.user &&(
          <NavLink style={navLinkStyle} to='/login'>Login</NavLink>
        )}
    </nav>
  )
}

export default Navbar
