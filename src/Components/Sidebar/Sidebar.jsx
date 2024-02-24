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
    <div className="w-[260px] h-[728px] bg-black  relative inline-block ">
        <div className='w-[260px] h-[728px] absolute opacity-20'><img src={SidebarImg} alt='sideImage'/></div>
        <div className='text-white'> 
        <div className='flex items-center gap-2'> <CgProfile/> <button> ADMIN </button> <IoMdArrowDropdown/>  </div>
        <div className='flex items-center gap-2'><MdDashboard/> Dashboard  </div>
        <div className='flex items-center gap-2'><MdOutlineSort/> Daily Jobs <IoMdArrowDropdown/>  </div>
        <div className='flex items-center gap-2'><PiSquaresFourFill/> Master Data <IoMdArrowDropdown/>  </div>
        </div>
    </div>
  );
};

export default Sidebar;
