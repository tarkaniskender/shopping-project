import React from 'react';

const ProductItem = ({product, cart, setCart}) => {
  const addToCart = (product) => {
    setCart([...cart, product])
  }
 
  return (
    <div className='border p-4 m-2 rounded-none shadow-lg flex flex-col items-left'>


      <img src={product.image} className='mb-4' alt="Product" />
      

      <div className='text-left mb-2'>
        {product.name}
      </div>
      <div className='font-semibold text-gray-500 my-2'>
        {product.price} €
      </div>
      <div className='text-gray-400 mb-4'>
        {product.descr}
      </div>

      <div className="border-none rounded-none cursor-pointer text-base w-[100px] h-10 flex items-center justify-start text-white bg-black hover:bg-red-700 hover:text-white p-4 transition-colors duration-1000" onClick={() => addToCart(product)}>
        Configure
      </div>
    
    </div>
  );
}

export default ProductItem;
