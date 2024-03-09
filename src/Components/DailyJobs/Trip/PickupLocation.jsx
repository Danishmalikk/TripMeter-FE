import React, { useState } from "react";
import { Box, FormControl, FormLabel, InputLabel, MenuItem, Select } from "@mui/material";
import { IoToggleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import Switch from '@mui/material/Switch';
import DateAuto, {Time} from "../../../utils/time";
import axios from 'axios' ; 

const PickUpLocation = () => {
 
  return (
    <div className="mx-10 ml-72 mt-20 flex flex-col w-60">
    <label className="mt-2">Pick Up Location </label>
    <input 
    className="border-b-2 mt-4 border-input-border outline-none bg-inherit" 
    type="number" 
    placeholder="Enter Pickup Location" />  
    <Link to={'/trip/droplocation'}>
    <button 
    className="text-white bg-box-background rounded-md shadow-lg shadow-slate-800 mt-6 w-20 h-10"> 
    Submit 
    </button>
    </Link>
    </div>
  );
};

export default PickUpLocation;
