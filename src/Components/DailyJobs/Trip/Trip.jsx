import React from 'react'
import { Link } from 'react-router-dom'

const Trip = () => {
  return (
    <div className='flex flex-col gap-6 mt-20 mx-10 rounded-md bg-box-background shadow-lg shadow-box-shadow p-6'> 
        <div className='bg-green-800 rounded-md shadow-lg shadow-slate-800 text-2xl -mt-10 w-20 h-16 flex items-center justify-center text-white'> Trip </div>
        <div className='flex justify-between bg-slate-200 p-4 items-center '> 
            <p> Total Records: 0 </p>
            <Link className='bg-green-800 rounded-md shadow-lg shadow-slate-800 p-2 px-4 text-white' to={'/trip'}>+ Create </Link>
            <input placeholder='Search columns'/> 
            <button>🔍</button>
        </div>
        {/* <table>
          <th>
          #
          </th> 

        </table> */}
    </div>
  )
}

export default Trip