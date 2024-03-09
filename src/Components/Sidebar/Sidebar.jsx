import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SidebarImg from '../../assets/img/sidebar-1.jpg'
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDashboard, MdOutlineTextsms } from "react-icons/md";
import { MdOutlineSort } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { IoLogOutOutline  } from "react-icons/io5";
import { FaGasPump, FaTaxi, FaWhatsapp } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AuthContext from '../../utils/AuthContext';

const Sidebar = () => { 
  const [isAdminActive, setIsAdminActive] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isActiveMaster, setIsActiveMaster] = useState(false)
  const navigate = useNavigate()
  const {logout } = useContext(AuthContext)

  const LogoutHandle = () => { 
    logout()
    navigate("/");
  }
  return (
    <div className="w-[240px] h-[728px] bg-box-background fixed inline-block ">
        {/* <div className='w-[255px] h-[728px] absolute opacity-30'><img src={SidebarImg} alt='sideImage'/></div> */}
        <div className='flex flex-col gap-6 text-button-text text-md  font-light p-6'> 
        <div onClick={(e)=> setIsAdminActive(!isAdminActive)} className='cursor-pointer flex flex-row items-center gap-16 text-base'><div className='flex gap-2'><CgProfile size={'1.5rem'}/> ADMIN </div> <div><IoMdArrowDropdown/></div>  </div>
        {isAdminActive && ( 
          <div className='flex flex-col gap-4 ml-3'>
              <Link to={'/dashboard'} className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> My Profile</Link>
              <div onClick={LogoutHandle} className='cursor-pointer flex items-center gap-2'><IoLogOutOutline  size={'1rem'}/> Logout </div>
          </div>
        )}
        <Link to={'/dashboard'}><div className='flex items-center gap-2'><MdDashboard size={'1.5rem'}/> Dashboard  </div> </Link>
        <div onClick={(e)=> setIsActive(!isActive)} className='cursor-pointer flex items-center gap-16'><div className='flex gap-2'><MdOutlineSort size={'1.5rem'}/> Daily Jobs </div> <div><IoMdArrowDropdown/></div>  </div>
        {/* drop down mennu for daily jobs */}
        {isActive && ( 
          <div className='flex flex-col gap-4 ml-3'>
              <Link to={'/passengers'} className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> Passenger </Link>
              <Link to={'/trips'} className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> Trip </Link>
          </div>
        )}
        <div onClick={(e)=> setIsActiveMaster(!isActiveMaster)} className='cursor-pointer flex items-center gap-12'><div className='flex gap-2'><PiSquaresFourFill size={'1.5rem'}/> Master Data </div> <div> <IoMdArrowDropdown/> </div>   </div>
        {isActiveMaster && ( 
          <div className='flex flex-col gap-4 ml-3'>
              <Link to={'/bookingcounter'} className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> Booking Counter </Link>
              <Link className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> Driver </Link>
              <Link className='cursor-pointer flex items-center gap-2'><FaGasPump size={'1rem'}/> Gas Type </Link>
              <Link className='cursor-pointer flex items-center gap-2'><MdOutlinePayment size={'1rem'}/> Payment Mode </Link>
              <Link className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> Site </Link>
              <Link className='cursor-pointer flex items-center gap-2'><MdOutlineTextsms size={'1rem'}/> Sms Template </Link>
              <Link className='cursor-pointer flex items-center gap-2'><FaTaxi  size={'1rem'}/> Taxi </Link>
              <Link className='cursor-pointer flex items-center gap-2'><FaTaxi size={'1rem'}/> Taxi Type </Link>
              <Link className='cursor-pointer flex items-center gap-2'><CgProfile size={'1rem'}/> User </Link>
              <Link className='cursor-pointer flex items-center gap-2'><FaWhatsapp  size={'1rem'}/> Whatsapp Template </Link>
              <Link className='cursor-pointer flex items-center gap-2'><FaLocationDot  size={'1rem'}/> Zone </Link>
          </div>
        )}
        </div>
    </div>
  );
};

export default Sidebar;
