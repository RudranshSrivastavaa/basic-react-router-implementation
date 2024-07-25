import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { AuthProvider } from './components/auth';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import FeaturedProduct from './components/FeaturedProduct';
import User from './components/User';
import UserDetail from './components/UserDetail';
import Product from './components/Product';
import NewProduct from './components/NewProduct';
import Profile from './components/Profile';

const LazyAbout = React.lazy(() => import('./components/About')); // Corrected path

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={
          <React.Suspense fallback="Loading...">
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='user' element={<User />} />
        <Route path='user:userId' element={<UserDetail />} />
        <Route path='products' element={<Product />}>
          <Route path='featured' element={<FeaturedProduct />} />
          <Route path='new' element={<NewProduct />} />
        </Route>
        <Route path='profile' element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
