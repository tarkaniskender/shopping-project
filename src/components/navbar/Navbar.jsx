import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = ({cart}) => {
  return (
    <div className='absolute top-0 left-0 w-full flex items-center justify-between p-4 transition-colors duration-1000 hover:bg-[#c0c0c0] z-10'>
        <NavbarLeft/>
        <NavbarRight cart={cart} />
    </div>
  )
}

export default Navbar
