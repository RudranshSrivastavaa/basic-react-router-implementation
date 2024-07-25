import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  return (
    <div>
      Home Page
      <button onClick={()=>navigate('order-summary')}>place order</button>
    </div>
  )
}

export default Home
