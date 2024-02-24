import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className='w-[1300px]'>
        <Navbar />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
