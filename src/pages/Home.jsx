import React, { useState } from 'react';
import SliderComp from '../components/home/SliderComp';
import Sorting from '../components/home/Sorting';
import Cattegory from '../components/home/Cattegory';
import Products from '../components/home/Products';
import Navbar from '../components/navbar/Navbar';
import Cart from '../components/home/Cart';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Navbar />
      <SliderComp />
      <Sorting />
      <div className="flex">
        <div className="w-1/6">
          <Cattegory />
        </div>
        <div className="w-4/6">
          <Products cart={cartItems} setCart={setCartItems} />
        </div>
        <div className="w-1/6">
          <Cart cart={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Home;
