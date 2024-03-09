import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Login from '../../Components/Login/Login';


const Navbar = () => {

  return (
    <div className='ml-60 p-6 bg-white w-[1290px] text-3xl font-bold flex justify-between items-center px-10 h-20 shadow-lg shadow-box-shadow'>
        <Link to={'/dashboard'}  className='text-text-color'> TRIPMETER </Link>
        <button className='relative flex items-center'> <FaBell className='text-lg absolute text-purple-600'></FaBell> <span className='rounded-full border border-white bg-pink-500 text-sm -mt-4 ml-2 z-10'> 50 </span>  </button>
    </div>
  )
}

export default Navbar