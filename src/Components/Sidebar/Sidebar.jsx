import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarImg from '../../assets/img/sidebar-1.jpg'
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { MdOutlineSort } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";

const Sidebar = () => { 
  return (
    <div className="w-[260px] h-[728px] bg-green-800  relative inline-block ">
        {/* <div className='w-[255px] h-[728px] absolute opacity-30'><img src={SidebarImg} alt='sideImage'/></div> */}
        <div className='flex flex-col gap-6 text-white text-sm  font-semibold p-6'> 
        <div className='flex items-center gap-2 text-base'> <CgProfile size={'1.5rem'}/> <button> ADMIN </button> <IoMdArrowDropdown/>  </div>
        <Link to={'/'}><div className='flex items-center gap-2'><MdDashboard size={'1.5rem'}/> Dashboard  </div> </Link>
        <Link to={'/trips'} className='cursor-pointer flex items-center gap-2'><MdOutlineSort size={'1.5rem'}/> Daily Jobs <IoMdArrowDropdown/>  </Link>
        <div className='cursor-pointer flex items-center gap-2'><PiSquaresFourFill size={'1.5rem'}/> Master Data <IoMdArrowDropdown/>  </div>
        </div>
    </div>
  );
};

export default Sidebar;
