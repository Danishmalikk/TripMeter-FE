import React, { useState } from "react";
import { Box, FormControl, FormLabel, InputLabel, MenuItem, Select } from "@mui/material";
import { IoToggleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import Switch from '@mui/material/Switch';
import DateAuto, {Time} from "../../../utils/time";
import axios from 'axios' ; 

const DropLocation = () => {
 
  return (
    <div className="ml-72 mx-10 mt-20 flex flex-col w-60">
    <label className="mt-2">Drop Location </label>
    <input 
    className="border-b-2 mt-4 border-input-border outline-none bg-inherit" 
    type="number" 
    placeholder="Drop Location" />  
    <Link to={'/trip/cabtype'}>
    <button 
    className="text-white bg-box-background rounded-md shadow-lg shadow-slate-800 mt-6 w-20 h-10"> 
    Submit 
    </button>
    </Link>
    </div>
  );
};

export default DropLocation;
