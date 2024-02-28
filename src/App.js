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
import Register from './Components/Register/Register';


function App() {
  return (
    <div className="App flex">
        <Sidebar />
      <div className='w-[1300px] ml-[15rem]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/trips' element={<Trip/>} />
          <Route path='/trip' element={<CreateTrip/>} />
          <Route path='/passengers' element={<Passenger/>} />
          <Route path='/passenger' element={<CreatePassenger/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
