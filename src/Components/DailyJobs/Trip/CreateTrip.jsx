import React, { useState } from "react";
import { Box, FormControl, FormLabel, InputLabel, MenuItem, Select } from "@mui/material";
import { IoToggleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import Switch from '@mui/material/Switch';
import DateAuto, {Time} from "../../../utils/time";
import axios from 'axios' ; 

const CreateTrip = () => {
  const [Booking, setBooking] = useState('');
  const [MobileNumber, setMobileNumber] = useState(null)

  const handleChange = (event) => {
    setBooking(event.target.value);
  };


  const handleMobileNumber = (e) => { 
    setMobileNumber(e.target.value)
  }

  const checkUser = () => { 
    try {
      const response = axios.get('api',MobileNumber)
      
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    // <div className="mx-10 mt-20">
    //   <Link to={'/trips'} 
    //   className='bg-box-background rounded-md shadow-lg shadow-slate-800 text-2xl -mt-10 w-20 h-16 
    //   flex items-center justify-center text-button-text'> 
    //   Trip 
    //   </Link>
    //   <div className="mt-10">
    //     <form className="flex justify-between">
    //       <div className="w-full gap-52 grid grid-cols-2 relative">
    //         <div className="flex flex-col mt-2"> 
    //         <label >Start Trip Date Time </label>
    //         <Time/> 
    //         <label className="mt-2">CGST</label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit" type="text" placeholder="" />  
    //         <label className="mt-2">Fare</label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Total Charges</label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">UTGST</label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Pickup Location</label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Replacement Reason</label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Is Cancelled</label>
    //         <Switch/>
    //         <label className="mt-2">Toll Charges Inclusion </label>
    //         <Switch/>
    //         <label className="mt-2">Drop Off Latitude </label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Pickup Latitude </label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" /> 
    //         {/* Form Control */}
    //         <div className="flex flex-col"> 
    //         <label className="mt-2"> Booking Counter </label>
    //         <FormControl variant="standard" sx={{minWidth: 120 }} > 
    //           <Select labelId="demo-simple-select-label"    id="demo-simple-select" 
    //                 value={Booking}    label=""    onChange={handleChange}  >
    //             <MenuItem value={10}>Booking Counter 1</MenuItem>
    //             <MenuItem value={20}>Booking Counter 2</MenuItem>
    //             <MenuItem value={30}>Booking Counter 3</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <label className="mt-2"> Passenger </label>
    //         <FormControl variant="standard" sx={{minWidth: 120 }} > 
    //           <Select labelId="demo-simple-select-label"    id="demo-simple-select" 
    //                 value={Booking}    label=""    onChange={handleChange}  >
    //             <MenuItem value={10}>Passenger 1</MenuItem>
    //             <MenuItem value={20}>Passenger 2</MenuItem>
    //             <MenuItem value={30}>Passenger 3</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <label className="mt-2"> Taxi </label>
    //         <FormControl variant="standard" sx={{minWidth: 120 }} > 
    //           <Select labelId="demo-simple-select-label"    id="demo-simple-select" 
    //                 value={Booking}    label=""    onChange={handleChange}  >
    //             <MenuItem value={10}>Alcazar</MenuItem>
    //             <MenuItem value={20}>Hyundai Verna</MenuItem>
    //             <MenuItem value={30}>Maruti Swift</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <label className="mt-2"> Taxi Type </label>
    //         <FormControl variant="standard" sx={{minWidth: 120 }} > 
    //           <Select labelId="demo-simple-select-label"    id="demo-simple-select" 
    //                 value={Booking}    label=""    onChange={handleChange}  >
    //             <MenuItem value={10}>Sedan</MenuItem>
    //             <MenuItem value={20}>SUV</MenuItem>
    //             <MenuItem value={30}>Luxury</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <label className="mt-2"> User </label>
    //         <FormControl variant="standard" sx={{minWidth: 120 }} > 
    //           <Select labelId="demo-simple-select-label"    id="demo-simple-select" 
    //                 value={Booking}    label=""    onChange={handleChange}  >
    //             <MenuItem value={10}>User 1</MenuItem>
    //             <MenuItem value={20}>User 2</MenuItem>
    //             <MenuItem value={30}>User 3</MenuItem>
    //           </Select>
    //         </FormControl>
    //         </div>
            
    //         <Link className="flex bg-box-background p-2 items-center gap-2 w-28 mt-4 rounded-md text-button-text" to={'/trips'}> 
    //         <FaSave className="text-2xl"/> Save </Link> 
    //         </div>


    //         <div className="flex flex-col"> 
    //         <label className="mt-2">Trip Date</label>
    //         <DateAuto />
    //         <label className="mt-2">Driver Trip Allowance </label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">SGST </label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Total Fare</label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Cancellation Reason</label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Drop off Location</label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Payment Option</label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Gst Tax Inclusion </label>
    //         <Switch/>
    //         <label className="mt-2">Is Package</label>
    //         <Switch/>
    //         <label className="mt-2">Drop Off Longitude </label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" />  
    //         <label className="mt-2">Pickup Longitude </label>
    //         <input className="border-b-2 border-input-border outline-none bg-inherit"  type="text" placeholder="" /> 
    //         <div className="flex flex-col"> 
    //         <label className="mt-2"> Driver </label>
    //         <FormControl variant="standard" sx={{minWidth: 120 }} > 
    //           <Select labelId="demo-simple-select-label"    id="demo-simple-select" 
    //                 value={Booking}    label=""    onChange={handleChange}  >
    //             <MenuItem value={10}>Booking Counter 1</MenuItem>
    //             <MenuItem value={20}>Booking Counter 2</MenuItem>
    //             <MenuItem value={30}>Booking Counter 3</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <label className="mt-2"> Site </label>
    //         <FormControl variant="standard" sx={{minWidth: 120 }} > 
    //           <Select labelId="demo-simple-select-label"    id="demo-simple-select" 
    //                 value={Booking}    label=""    onChange={handleChange}  >
    //             <MenuItem value={10}>Booking Counter 1</MenuItem>
    //             <MenuItem value={20}>Booking Counter 2</MenuItem>
    //             <MenuItem value={30}>Booking Counter 3</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <label className="mt-2"> Replacement Taxi </label>
    //         <FormControl variant="standard" sx={{minWidth: 120 }} > 
    //           <Select labelId="demo-simple-select-label"    id="demo-simple-select" 
    //                 value={Booking}    label=""    onChange={handleChange}  >
    //             <MenuItem value={10}>Booking Counter 1</MenuItem>
    //             <MenuItem value={20}>Booking Counter 2</MenuItem>
    //             <MenuItem value={30}>Booking Counter 3</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <label className="mt-2"> Trip Package </label>
    //         <FormControl variant="standard" sx={{minWidth: 120 }} > 
    //           <Select labelId="demo-simple-select-label"    id="demo-simple-select" 
    //                 value={Booking}    label=""    onChange={handleChange}  >
    //             <MenuItem value={10}>Booking Counter 1</MenuItem>
    //             <MenuItem value={20}>Booking Counter 2</MenuItem>
    //             <MenuItem value={30}>Booking Counter 3</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <label className="mt-2"> Zone </label>
    //         <FormControl variant="standard" sx={{minWidth: 120 }} > 
    //           <Select labelId="demo-simple-select-label"    id="demo-simple-select" 
    //                 value={Booking}    label=""    onChange={handleChange}  >
    //             <MenuItem value={10}>Booking Counter 1</MenuItem>
    //             <MenuItem value={20}>Booking Counter 2</MenuItem>
    //             <MenuItem value={30}>Booking Counter 3</MenuItem>
    //           </Select>
    //         </FormControl>
    //         </div>
    //         <Link className="flex bg-red-800 p-2 items-center gap-2 w-28 mt-4 rounded-md text-button-text" to={'/trips'}> 
    //         <MdCancel className="text-2xl"/> Cancel </Link> 
    //         </div>
    //       </div>

    //     </form>
    //   </div>
    // </div>
    <div className="mx-10 mt-20 flex flex-col w-40">
    <label className="mt-2">Mobile Number</label>
    <input 
    onChange={(e)=>handleMobileNumber(e)}
    className="border-b-2 border-input-border outline-none bg-inherit" 
    type="number" 
    placeholder="Enter Mobile No." />  
    </div>
  );
};

export default CreateTrip;
