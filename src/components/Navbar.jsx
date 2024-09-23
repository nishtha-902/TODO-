import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-sky-700 text-white p-3'>
        <div className='logo '><span className='mx-7 text-xl font-bold ml-3'>Tasketize</span></div>
        <ul className='flex sm:gap-8 sm:mx-7 mx-1 gap-3'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
