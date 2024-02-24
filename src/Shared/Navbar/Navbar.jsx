import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='p-6 bg-white width-[1250px] text-3xl font-bold flex justify-between items-center px-10 h-20 shadow-xl'>
        <span className='text-gray-700'> TRIPMETER </span>
        <button className='relative flex items-center'> <FaBell className='text-lg absolute text-purple-600'></FaBell> <span className='rounded-full border border-white bg-pink-500 text-sm -mt-4 ml-2 z-10'> 5 </span>  </button>
    </div>
  )
}

export default Navbar