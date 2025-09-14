import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import TripForm from './Components/TripForm';
import Trips from './Pages/Trips';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/TripForm' element={<TripForm />}/>
        <Route path='/Trips' element={<Trips />}/>
      </Routes>
    </Router>
  );
}

export default App;
