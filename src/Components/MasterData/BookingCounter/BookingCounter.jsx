import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', +9186972618, 'Nitin', '+9197589248', "Done"),
  createData('2', +9812548231, 'Ajay', '+9197589248', 'Pending'),
 
];

function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Index</StyledTableCell>
            <StyledTableCell align="center">Contact Details</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Mobile Number</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const BookingCounter = () => {
  return (
    <div className='ml-72 flex flex-col gap-6 mt-20 mx-10 rounded-md bg-box-background shadow-lg shadow-box-shadow p-6'> 
        <div className='bg-box-background rounded-md shadow-lg shadow-slate-800 text-2xl -mt-10 w-fit px-5 h-16 flex items-center justify-center text-button-text'> Booking Counter </div>
        <div className='flex justify-between bg-slate-200 p-4 px-6 items-center '> 
            <p> Total Records: 0 </p>
            <Link className='bg-box-background w-28 rounded-md shadow-lg shadow-slate-800 p-2 px-4 text-button-text' to={'/trip'}>+ Create </Link>
            <input className='bg-box-background rounded-md shadow-slate-800 shadow-lg p-2' placeholder='Search columns'/> 
            <button><FaSearch/></button>
        </div>
        <CustomizedTables/>
    </div>
  )
}

export default BookingCounter