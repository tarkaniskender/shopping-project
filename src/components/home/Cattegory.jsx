
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Cattegory = () => {
    const dispatch =useDispatch();
    const {categories} = useSelector(state => state.categories)

    
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
  return (
    <div className=' p-2  bg-gray-200'>
        <div className='border-b pl-2 text-xl font-bold'>Categories</div>
        <div className='border-b border-black w-2/3 mx-start mx-2 p-2'></div>
        {
            categories?.map((category,i) => (
                <div className=' pt-2 text-lg cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-700 hover:pl-4 pl-2 ' key={i}>{category}</div>
            ) )
        }
    </div>
  )
}

export default Cattegory
