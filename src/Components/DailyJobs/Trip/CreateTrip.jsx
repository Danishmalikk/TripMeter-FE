import React from "react";
import { Box } from "@mui/material";
import { IoToggleOutline } from "react-icons/io5";


const CreateTrip = () => {
  return (
    <div className="mx-10 mt-20">
      <div className='bg-green-800 rounded-md shadow-lg shadow-slate-800 text-2xl -mt-10 w-20 h-16 flex items-center justify-center text-white'> Trip </div>
      <div className="mt-10">
        <form className="flex justify-between">
          <div className="w-full gap-52 grid grid-cols-2">
            <div className="flex flex-col"> 
            <label>Start Trip Date Time </label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2" type="date" />  
            <label>CGST</label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2" type="text" placeholder="" />  
            <label>Fare</label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>Total Charges</label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>UTGST</label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>Pickup Location</label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>Replacement Reason</label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>Is Cancelled</label>
            <IoToggleOutline className="text-xl mt-2"  type="checkbox" placeholder="" /> 
            </div>
            <div className="flex flex-col"> 
            <label>Trip Date</label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2" type="date" />
            <label>Driver Trip Allowance </label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>SGST </label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>Total Fare</label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>Cancellation Reason</label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>Drop off Location</label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>GST Tax Inclusion </label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            <label>Drop Off Longitude </label>
            <input className="border-b-2 border-green-700 bg-inherit mt-2"  type="text" placeholder="" />  
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTrip;
