import React from 'react'
import Slider from 'react-slick';



const SliderComp = () => {
  var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
  return (
    <div>
      
      <Slider {...settings}>
        <div className='!flex items-center bg-black'>
          <div className='p-7 w-2/3'>
            <div className='text-4xl font-bold text-white'>Welcome to the Kässbohrer Fanshop!</div>
            <div className='text-l my-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque error aliquam harum. Optio veniam eaque, exercitationem voluptatibus tempora fuga ab facilis consequuntur a magnam dolor impedit aliquam necessitatibus praesentium.
            Adipisci, expedita vel molestias ipsam perferendis doloremque accusamus et pariatur optio odio quidem officiis! Veniam aliquid asperiores quidem sed tempore, explicabo deleniti ducimus cumque magni suscipit aut ab earum. Minus?
            Officiis iure deleniti, veritatis quod labore debitis dolore quam eligendi natus exercitationem vitae earum minima vero sunt nesciunt culpa tempora illum a at voluptas saepe doloremque voluptate nihil. Voluptatum, assumenda.</div>
            <div className=' border-none rounded-none cursor-pointer text-m w-[100px] h-5 flex items-center justify-start text-white bg-red-700 hover:bg-white hover:text-black p-4 transition-colors duration-1000'>More...</div>
          </div>
        <img className='w-2/4' src="https://kaessbohrer.imgix.net/uploads/2024/8/thumbnail-iaa-carousel-3840-2024-08-21-145239.jpg?auto=format,compress&lossless=true&s=ce33116d54f48bad3effa3d2e1ca95cf" alt="" />
        </div>
      <div className='!flex items-center bg-black'>
          <div className='p-7 w-2/3'>
            <div className='text-4xl font-bold text-white'>Welcome to the Kässbohrer Fanshop!</div>
            <div className='text-l my-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque error aliquam harum. Optio veniam eaque, exercitationem voluptatibus tempora fuga ab facilis consequuntur a magnam dolor impedit aliquam necessitatibus praesentium.
            Adipisci, expedita vel molestias ipsam perferendis doloremque accusamus et pariatur optio odio quidem officiis! Veniam aliquid asperiores quidem sed tempore, explicabo deleniti ducimus cumque magni suscipit aut ab earum. Minus?
            Officiis iure deleniti, veritatis quod labore debitis dolore quam eligendi natus exercitationem vitae earum minima vero sunt nesciunt culpa tempora illum a at voluptas saepe doloremque voluptate nihil. Voluptatum, assumenda.</div>
            <div className=' border-none rounded-none cursor-pointer text-m w-[100px] h-5 flex items-center justify-start text-white bg-red-700 hover:bg-white hover:text-black p-4 transition-colors duration-1000'>More...</div>
          </div>
        <img className='w-2/4' src="https://kaessbohrer.imgix.net/uploads/2024/7/new-reefer-slider-2024-07-11-100833.jpg?auto=format,compress&lossless=true&s=7fc10a211a0e93ed7dc41e74fb0469ca" alt="" />
      </div>
      <div className='!flex items-center bg-black'>
         <div className='p-7 w-2/3'>
            <div className='text-4xl font-bold text-white'>Welcome to the Kässbohrer Fanshop!</div>
            <div className='text-l my-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque error aliquam harum. Optio veniam eaque, exercitationem voluptatibus tempora fuga ab facilis consequuntur a magnam dolor impedit aliquam necessitatibus praesentium.
            Adipisci, expedita vel molestias ipsam perferendis doloremque accusamus et pariatur optio odio quidem officiis! Veniam aliquid asperiores quidem sed tempore, explicabo deleniti ducimus cumque magni suscipit aut ab earum. Minus?
            Officiis iure deleniti, veritatis quod labore debitis dolore quam eligendi natus exercitationem vitae earum minima vero sunt nesciunt culpa tempora illum a at voluptas saepe doloremque voluptate nihil. Voluptatum, assumenda.</div>
            <div className=' border-none rounded-none cursor-pointer text-m w-[100px] h-5 flex items-center justify-start text-white bg-red-700 hover:bg-white hover:text-black p-4 transition-colors duration-1000'>More...</div>
          </div>
        <img className='w-2/4' src="https://kaessbohrer.imgix.net/uploads/2024/7/new-container-slider-2024-07-11-101057.jpg?auto=format,compress&lossless=true&s=9f016c1729230372ba1669c6be97ab8d" alt="" />
      </div>
      </Slider>
    </div>
    
  )
}

export default SliderComp;