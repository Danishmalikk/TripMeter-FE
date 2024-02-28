import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarImg from '../../assets/img/sidebar-1.jpg'
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { MdOutlineSort } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { IoLogOutOutline  } from "react-icons/io5";

const Sidebar = () => { 
  const [isAdminActive, setIsAdminActive] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isActiveMaster, setIsActiveMaster] = useState(false)
  return (
    <div className="w-[260px] h-[728px] bg-green-800 fixed inline-block ">
        {/* <div className='w-[255px] h-[728px] absolute opacity-30'><img src={SidebarImg} alt='sideImage'/></div> */}
        <div className='flex flex-col gap-6 text-white text-sm  font-semibold p-6'> 
        <div onClick={(e)=> setIsAdminActive(!isAdminActive)} className='cursor-pointer flex items-center gap-2 text-base'> <CgProfile size={'1.5rem'}/> <button> ADMIN </button> <IoMdArrowDropdown/>  </div>
        {isAdminActive && ( 
          <div className='flex flex-col gap-4 ml-3'>
              <Link to={'/'} className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> My Profile</Link>
              <Link className='cursor-pointer flex items-center gap-2'><IoLogOutOutline  size={'1rem'}/> Logout </Link>
          </div>
        )}
        <Link to={'/'}><div className='flex items-center gap-2'><MdDashboard size={'1.5rem'}/> Dashboard  </div> </Link>
        <div onClick={(e)=> setIsActive(!isActive)} className='cursor-pointer flex items-center gap-2'><MdOutlineSort size={'1.5rem'}/> Daily Jobs <IoMdArrowDropdown/>  </div>
        {/* drop down mennu for daily jobs */}
        {isActive && ( 
          <div className='flex flex-col gap-4 ml-3'>
              <Link to={'/passengers'} className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> Passenger </Link>
              <Link to={'/trips'} className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> Trip </Link>
          </div>
        )}
        <div onClick={(e)=> setIsActiveMaster(!isActiveMaster)} className='cursor-pointer flex items-center gap-2'><PiSquaresFourFill size={'1.5rem'}/> Master Data <IoMdArrowDropdown/>  </div>
        {isActiveMaster && ( 
          <div className='flex flex-col gap-4 ml-3'>
              <Link className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> Booking Counter </Link>
              <Link className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> Driver </Link>
          </div>
        )}
        </div>
    </div>
  );
};

export default Sidebar;
