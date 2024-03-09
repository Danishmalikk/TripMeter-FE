import React from 'react'
import { FaSave } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CreatePassenger = () => {
  return (
    <div className="mx-10 mt-20 ml-72 ">
    <Link to={'/passengers'} 
    className='bg-box-background rounded-md shadow-lg shadow-slate-800 text-2xl -mt-10 w-fit px-5 h-16 
    flex items-center justify-center text-button-text'> 
    Passenger 
    </Link>
    <div className="mt-10">
      <form className="flex justify-between">
        <div className="w-full gap-52 grid grid-cols-2 relative">
          <div className="flex flex-col mt-2"> 
          <label className="mt-2">Contact Details</label>
          <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
          <label className="mt-2">Mobile Number</label>
          <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
          
          <Link className="flex bg-box-background p-2 items-center gap-2 w-28 mt-4 rounded-md text-button-text" to={'/trips'}> 
          <FaSave className="text-2xl"/> Save </Link> 
          </div>


          <div className="flex flex-col">
          <label className="mt-2">Name </label>
          <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
          <Link className="flex bg-red-800 p-2 items-center gap-2 w-28 mt-4 rounded-md text-button-text" to={'/trips'}> 
          <MdCancel className="text-2xl"/> Cancel </Link> 
          </div>
        </div>

      </form>
    </div>
  </div>
  )
}

export default CreatePassenger