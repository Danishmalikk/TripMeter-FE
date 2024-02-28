import React from 'react'
import { FaSave } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CreatePassenger = () => {
  return (
    <div className="mx-10 mt-20">
    <Link to={'/passengers'} 
    className='bg-green-800 rounded-md shadow-lg shadow-slate-800 text-2xl -mt-10 w-fit px-5 h-16 
    flex items-center justify-center text-white'> 
    Passenger 
    </Link>
    <div className="mt-10">
      <form className="flex justify-between">
        <div className="w-full gap-52 grid grid-cols-2 relative">
          <div className="flex flex-col mt-2"> 
          <input className="border-b-2 border-green-700 outline-none bg-inherit"  type="text" placeholder="" />  
          <label className="mt-2">Pickup Location</label>
          <input className="border-b-2 border-green-700 outline-none bg-inherit"  type="text" placeholder="" />  
          <label className="mt-2">Replacement Reason</label>
          <input className="border-b-2 border-green-700 outline-none bg-inherit"  type="text" placeholder="" />  
          
          <Link className="flex bg-green-800 p-2 items-center gap-2 w-28 mt-4 rounded-md text-white" to={'/trips'}> 
          <FaSave className="text-2xl"/> Save </Link> 
          </div>


          <div className="flex flex-col">
          <input className="border-b-2 border-green-700 outline-none bg-inherit"  type="text" placeholder="" />  
          <label className="mt-2">Gst Tax Inclusion </label>
          <Link className="flex bg-red-800 p-2 items-center gap-2 w-28 mt-4 rounded-md text-white" to={'/trips'}> 
          <MdCancel className="text-2xl"/> Cancel </Link> 
          </div>
        </div>

      </form>
    </div>
  </div>
  )
}

export default CreatePassenger