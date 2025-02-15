import React, { useState } from 'react';
import SliderComp from '../components/home/SliderComp';
import Sorting from '../components/home/Sorting';
import Cattegory from '../components/home/Cattegory';
import Products from '../components/home/Products';
import Navbar from '../components/navbar/Navbar';
import Cart from '../components/home/Cart';
import Footer from '../components/footer/Footer';


const Home = () => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]); 
  };

  return (
    <div>
      <Navbar cart={cart} />
      <SliderComp />
      <Sorting />
      <div className="flex">
        <div className="w-1/6">
          <Cattegory />
        </div>
        <div className="w-4/6">
          <Products cart={cart} setCart={setCart} />
        </div>
        <div className="w-1/6">
          <Cart cart={cart} clearCart={clearCart} />
        </div>

      
    </div>
    <div>
    </div>
        <div className='display:block'>
          <Footer/>
        </div>
    </div>
  );
};

export default Home;