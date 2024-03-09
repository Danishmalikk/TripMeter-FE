import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Trip from './Components/DailyJobs/Trip/Trip';
import { Route, Routes } from 'react-router-dom';
import CreateTrip from './Components/DailyJobs/Trip/CreateTrip';
import Passenger from './Components/DailyJobs/Passenger/Passenger';
import CreatePassenger from './Components/DailyJobs/Passenger/CreatePassenger';
import Login from './Components/Login/Login';
import Protect from './utils/Protect';
import { useContext} from 'react';
import AuthContext from './utils/AuthContext';
import PickUpLocation from './Components/DailyJobs/Trip/PickupLocation';
import DropLocation from './Components/DailyJobs/Trip/DropLocation';
import CabType from './Components/DailyJobs/Trip/CabType';
import BookingCounter from './Components/MasterData/BookingCounter/BookingCounter';


function App() {
  const {isLoggedIn }= useContext(AuthContext)
  return (
    <div className="App flex">
      {isLoggedIn && <Sidebar/> } 
      <div className='w-[1430px] '>
      {isLoggedIn && <Navbar /> } 
        <Routes>
          <Route path='/' element={<Login/>}> </Route>
          <Route path='/dashboard' element={<Protect Component={Dashboard}/>}></Route>
          <Route path='/trips' element={<Protect Component={Trip}/>}></Route>
          <Route path='/trip' element={<Protect Component={CreateTrip}/>}></Route>
          <Route path='/trip/pickuplocation' element={<Protect Component={PickUpLocation}/>}></Route>
          <Route path='/trip/droplocation' element={<Protect Component={DropLocation}/>}></Route>
          <Route path='/trip/cabtype' element={<Protect Component={CabType}/>}></Route>
          <Route path='/passengers' element={<Protect Component={Passenger}/>}></Route>
          <Route path='/passenger' element={<Protect Component={CreatePassenger}/>}></Route>
          <Route path='/bookingcounter' element={<Protect Component={BookingCounter}/>}></Route>
        </Routes>
        {isLoggedIn && <Footer /> } 
      </div>
    </div>
  );
}

export default App;
