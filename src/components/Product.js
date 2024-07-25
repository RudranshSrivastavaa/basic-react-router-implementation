import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <>
    <div>
      <input type='search' placeholder='Search products'></input>
    </div>
    <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Product
