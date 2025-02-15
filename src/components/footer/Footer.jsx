import React from 'react'
import Currency from '../Currency'

function Footer() {
  return (
    <div className='footer bg-black pt-14 pb-14 justify-center items-center h-auto flex flex-col'>
      <div className='flex justify-center items-center'>
        <div className='relative p-6 px-7 pt-4 transition-all duration-500 text-white hover:text-red-700'>
          <a href='https://www.google.com/'><strong>PRODUCTS</strong></a>
        </div>
        <div className='relative p-6 px-7 pt-4 transition-all duration-500 text-white hover:text-red-700'>
          <a href='https://www.google.com/'><strong>MY ORDERS</strong></a>
        </div>
        <div className='relative p-6 px-7 pt-4 transition-all duration-500 text-white hover:text-red-700'>
          <a href='https://www.google.com/'><strong>ABOUT US</strong></a>
        </div>
        <div className='relative p-6 px-7 pt-4 transition-all duration-500 text-white hover:text-red-700'>
          <a href='https://www.google.com/'><strong>CONTACT</strong></a>
        </div>
      </div>
      <div className='currency pt-7'>
        <Currency />
      </div>
    </div>
  )
}

export default Footer
