import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { PiBasketLight } from 'react-icons/pi';

const NavbarRight = ({ cart = [] }) => {  
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-start space-x-7'>
        <div className='relative p-6 px-7 pt-4 transition-all duration-500 text-white hover:text-black'>
          <a href='https://www.google.com/'>PRODUCTS</a>
        </div>
        <div className='relative p-6 px-7 pt-4 transition-all duration-500 text-white hover:text-black'>
          <a href='https://www.google.com/'>MY ORDERS</a>
        </div>
        <div className='relative p-6 px-7 pt-4 transition-all duration-500 text-white hover:text-black'>
          <a href='https://www.google.com/'>ABOUT US</a>
        </div>
        <div className='relative p-6 px-7 pt-4 transition-all duration-500 text-white hover:text-black'>
          <a href='https://www.google.com/'>CONTACT</a>
        </div>
      </div>

      <MdFavorite size={25} />
      
      
      <div className="">
        <div className="relative">
          <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </div>
          <PiBasketLight size={25} />
        </div>
      </div>
      
      <div className='flex items-center border p-2 rounded-none bg-gray-200'>
        <input className='bg-gray-200 outline-none' type='text' placeholder='Search' />
        <IoSearchSharp size={27} />
      </div>
    </div>
  );
};

export default NavbarRight;
